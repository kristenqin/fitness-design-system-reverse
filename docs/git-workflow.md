# Git Workflow

This document defines the Git workflow constraints for Fitness Design System Reverse.

## Branches

1. `main` is the stable integration branch and should stay releasable.
2. Use a short-lived topic branch for non-trivial implementation work.
3. Branch names should follow `<type>/<short-topic>`, for example:
   - `docs/reverse-workflow`
   - `research/fitness-app-capture`
   - `feat/dashboard-surface`
   - `fix/token-normalization`
   - `chore/repo-maintenance`
4. Tiny docs-only maintenance may happen on `main` when the working tree is clean.

## Before Editing

1. Run `git status --short --branch`.
2. Identify existing local changes and treat them as user-owned unless there is clear evidence they belong to the current task.
3. Read the relevant source documents under `docs/`.
4. State the intended write set before making broad or risky changes.

## Change Discipline

1. Keep one task to one coherent slice.
2. Do not silently expand scope.
3. Do not mix formatting-only changes with product, architecture, or behavior changes unless the user asked for both.
4. Do not commit generated artifacts, dependency folders, local caches, logs, secrets, temporary files, or debug output.
5. Keep `.gitignore` current when new local or generated artifacts appear.

## Commit Policy

1. Create a commit after each coherent slice is complete and the relevant verification gate has passed.
2. Ask before committing only when existing local changes are ambiguous, the intended slice cannot be separated cleanly, or the next step would require a prohibited Git operation.
3. Stage files intentionally.
4. Use Conventional Commits:
   - `docs: define reverse workflow`
   - `feat: add fitness dashboard reverse surface`
   - `fix: correct token contract`
   - `chore: initialize repository workflow`
5. Each commit should contain one coherent reason to exist.
6. Before committing, review `git diff --staged` and run the smallest meaningful verification gate.

## Verification Gates

1. Docs-only changes: review links, terminology, ordering, and consistency with related docs.
2. Workflow changes: verify this document, `AGENTS.md`, and related docs say the same thing.
3. TypeScript or component changes: run `npm run build`.
4. Storybook-facing changes: run `npm run build-storybook` when practical, or record why it was skipped.

## Prohibited Without Explicit User Approval

1. `git reset --hard`
2. `git checkout -- .`
3. Force-pushing
4. Rebasing shared or user-owned branches
5. Deleting user-created files or branches
6. Reverting unrelated local changes

## Handoff Report

At the end of a task, report:

1. Status
2. Files changed
3. Checks run
4. Commit hash
5. Remote URL when relevant
6. Known gaps or follow-up risks
7. Current branch and whether the working tree is clean
