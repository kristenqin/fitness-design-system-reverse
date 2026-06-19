# Agent Instructions

Follow `docs/git-workflow.md` for every change in this repository.

## Operating Rules

1. Run `git status --short --branch` before editing.
2. Treat existing local changes as user-owned unless the user explicitly says otherwise.
3. Keep each task to one coherent slice.
4. Use Conventional Commits.
5. Do not commit generated artifacts, dependency folders, local caches, screenshots, secrets, or debug output unless the task explicitly asks for them.
6. Run the smallest meaningful validation before committing or handing off.
7. Never use destructive Git operations or force-push without explicit user approval.

## Design-System Reverse Rules

1. Preserve raw evidence under `ui-reverse-experiments/`; this directory is ignored until the user asks to publish selected artifacts.
2. Put durable reverse-engineering decisions in `docs/`.
3. Pair every reusable reverse component with a contract document.
4. Promotion from reverse surface to design-system candidate requires a review note that lists evidence, inferred tokens, unresolved gaps, and accessibility considerations.
