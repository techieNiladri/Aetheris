# My engineering learning roadmap

I’ll start this roadmap after I finish connecting my portfolio, Aetheris, and project links. I’ll then study these topics alongside Productivity Garden and apply each one to a real feature instead of collecting tutorials without building.

## Learning sequence

1. **Trace a feature end to end.** I’ll map the user action, browser request, server or database checks, data change, response, and failure behavior. I’ll learn the HTTP and API flow as I do this.
2. **Make data rules explicit.** I’ll practice relational modeling, constraints, transactions, and concurrency. In Productivity Garden, I’ll define what prevents duplicate harvests and how the app decides when a plant is ready.
3. **Test allowed and denied behavior.** I’ll cover normal cases, edge cases, and failures. For each protected table, I’ll test that a user can access their own records and cannot access another user’s records.
4. **Apply security controls.** I’ll study authentication and authorization, input validation, least privilege, secret handling, and secure database access. I’ll use OWASP ASVS as a verifiable security checklist and test Supabase grants and RLS policies.
5. **Learn to operate what I build.** I’ll practice CI, deployment, database migrations, logs, error reporting, backups, and restore procedures. I’ll define what “working” means before adding infrastructure for scale.
6. **Keep frontend quality in the engineering process.** I’ll check keyboard access, semantic markup, contrast, responsive behavior, and performance as I build and refine the projects.

## How I’ll apply it

- **Aetheris and my design experiments:** I’ll keep improving responsive behavior, accessibility, clear project descriptions, and the paths from a project card to its demo or source.
- **Productivity Garden:** I’ll use it to demonstrate data integrity, authorization, transactional operations, edge-case behavior, and reliable deployment.
- **Iron-Forge:** I’ll extend those practices to workout records, validation, and a second end-to-end data workflow.

For each feature, I’ll record the requirement, important decisions, tests, and any known limitation. I’ll describe what I have verified and avoid claiming performance or security properties that I have not measured.
