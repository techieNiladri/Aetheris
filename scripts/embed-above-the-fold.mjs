import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'projects', 'above-the-fold', 'dist');
const publicRoot = path.join(root, 'public');
const destination = path.join(publicRoot, 'above-the-fold');

if (!existsSync(path.join(source, 'index.html'))) {
  throw new Error('Above the Fold build output is missing. Build that project before embedding it.');
}
if (path.dirname(destination) !== publicRoot) {
  throw new Error('Refusing to copy outside the expected public/above-the-fold destination.');
}

rmSync(destination, { recursive: true, force: true });
mkdirSync(publicRoot, { recursive: true });
cpSync(source, destination, { recursive: true });
console.log('Embedded Above the Fold at public/above-the-fold.');
