# CI Stability & Pipeline Architecture

This document serves as the permanent engineering reference for the WelliQo Continuous Integration (CI) pipeline. The pipeline architecture is frozen and should not be modified without explicit CTO approval.

## 1. Final CI Workflow

The GitHub Actions workflow executes in a strict deterministic sequence to ensure the platform builds successfully in a clean environment:

1. **Install Dependencies**: `pnpm install --frozen-lockfile`
2. **Compile Content**: `pnpm build` (Runs recursively across the workspace)
3. **Format Check**: `pnpm format:check` (Prettier)
4. **Lint**: `pnpm lint` (ESLint)
5. **Type Check**: `pnpm typecheck` (TypeScript)
6. **Tests**: `pnpm test` (Jest/Vitest)

## 2. Build Order & Dependency Graph

The WelliQo monorepo relies on statically compiled JSON artifacts (`index.json`, `search-index.json`).

**The Build Hierarchy:**

1. `@welliqo/database` (Core abstractions)
2. `@welliqo/assessment-engine` (Logic rules)
3. `@welliqo/content` (Compiles MDX into static JSON artifacts)
4. `@welliqo/ui` (React Components)
5. `@welliqo/web` (Next.js Application)

## 3. Why Build Runs Before Typecheck

The web application (`@welliqo/web`) consumes generated artifacts (`dist/index.json`) from the content package (`@welliqo/content`).

If typechecking (`tsc --noEmit`) runs before the build phase, it will attempt to validate imports against files that do not exist yet in a clean CI environment, resulting in a false-positive failure (e.g., `Cannot find module '@welliqo/content/dist/index.json'`). By running `pnpm build` first, we guarantee that all generated artifacts are materialized on disk before TypeScript evaluates the dependency graph.

## 4. Configuration Rationales

### Why `.gitattributes` Exists

`.gitattributes` is enforced to normalize line endings (`* text=auto eol=lf`) across Windows, macOS, and Linux environments. Without this, developers pushing from Windows (`CRLF`) would cause the `pnpm-lock.yaml` and source files to violently churn, leading to merge conflicts and failing Prettier checks in the CI runner.

### Why `.prettierignore` Exists

Prettier must not attempt to format generated artifacts (`.next`, `dist`, `coverage`, `pnpm-lock.yaml`). Formatting generated directories leads to endless formatting loops and false-positive CI failures.

### Why `--frozen-lockfile` is Used

`pnpm install --frozen-lockfile` guarantees that the CI runner installs the _exact_ dependency tree mapped in `pnpm-lock.yaml`. Without this flag, PNPM might resolve a newer sub-dependency, causing the lockfile to update mid-CI, which breaks reproducibility and fails pipeline checks expecting a clean git tree.

## 5. Common CI Failure Scenarios & Recovery

| Scenario                    | Symptom                                                 | Recovery Procedure                                                                                              |
| :-------------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| **Lockfile Drift**          | `ERR_PNPM_LOCKFILE_IS_OUT_OF_DATE`                      | Run `pnpm install` locally and commit the updated `pnpm-lock.yaml`.                                             |
| **Module Not Found (Dist)** | `Cannot find module '@welliqo/content/dist/index.json'` | Verify that the `build` script in the pipeline correctly runs before `typecheck`.                               |
| **Prettier Churn**          | Format check fails on `pnpm-lock.yaml`                  | Ensure `.prettierignore` excludes the lockfile and `.gitattributes` enforces LF.                                |
| **Phantom Dependencies**    | Local dev works, CI fails on missing imports            | Ensure the package is explicitly listed in `package.json` dependencies (PNPM strictly isolates `node_modules`). |

## Status: FROZEN

Modifications to the following are **restricted**:

- `.github/workflows/`
- `package.json`
- `pnpm-workspace.yaml`
- `turbo.json`
- `tsconfig`
- `.gitattributes`
- `.prettierignore`
