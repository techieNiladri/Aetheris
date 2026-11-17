import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

// Approved on 2026-11-17: only this unpatched advisory in build dependencies.
// Expiry forces a fresh review; runtime and unrelated findings remain blocking.
const advisory = 'https://github.com/advisories/GHSA-fc5q-39xc-vjpf';
const expiry = Date.parse('2026-11-24T23:59:59+05:30');
const npmCli = process.env.npm_execpath;
if (!npmCli) throw new Error('Run this check with npm run audit:review.');

let failed = false;
for (const scope of ['.', 'projects/above-the-fold']) {
  const result = spawnSync(process.execPath, [npmCli, 'audit', '--json', '--prefix', scope], {
    encoding: 'utf8', maxBuffer: 5 * 1024 * 1024,
  });
  if (result.error || ![0, 1].includes(result.status)) {
    throw new Error(`Audit could not complete for ${scope}: ${result.error?.message ?? result.stderr}`);
  }
  const report = JSON.parse(result.stdout);
  if (report.error || !report.vulnerabilities || !report.metadata?.vulnerabilities) {
    throw new Error(`Invalid audit report for ${scope}`);
  }
  const lock = JSON.parse(readFileSync(path.join(scope, 'package-lock.json'), 'utf8'));
  const findings = report.vulnerabilities;
  const accepted = [];
  const blocked = [];

  function isOnlyApprovedBuildFinding(name, visited = new Set()) {
    if (visited.has(name)) return false;
    const finding = findings[name];
    if (!finding || !['picomatch', 'fdir', 'tinyglobby', 'vite'].includes(name)) return false;
    if (!Array.isArray(finding.nodes) || finding.nodes.length === 0 ||
        !finding.nodes.every(node => lock.packages?.[node]?.dev === true)) return false;
    if (!Array.isArray(finding.via) || finding.via.length === 0) return false;
    const next = new Set(visited).add(name);
    return finding.via.every(via => typeof via === 'string'
      ? isOnlyApprovedBuildFinding(via, next)
      : via.url === advisory && via.name === 'picomatch' && via.severity === 'high');
  }

  for (const [name, finding] of Object.entries(findings)) {
    if (!['high', 'critical'].includes(finding.severity)) continue;
    if (Date.now() <= expiry && finding.severity === 'high' && isOnlyApprovedBuildFinding(name)) {
      accepted.push(name);
    } else blocked.push(name);
  }
  console.log(`${scope}: full audit totals ${JSON.stringify(report.metadata.vulnerabilities)}`);
  if (accepted.length) {
    console.warn(`${scope}: approved BUILD-ONLY exception through 2026-11-24 IST: ${accepted.join(', ')}; ${advisory}`);
  }
  if (blocked.length) {
    console.error(`${scope}: blocking high/critical findings: ${blocked.join(', ')}`);
    failed = true;
  }
}
process.exitCode = failed ? 1 : 0;
