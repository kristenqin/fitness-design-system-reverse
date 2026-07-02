# Workflow Guardrails

These guardrails apply to every local Agent cycle unless the current cycle explicitly overrides them in `registry/next-action.json`.

## Evidence And Review Boundaries

- `captured != reviewed`
- `runtime-tested != promoted`
- `Storybook = runtime validation, not showcase`

Captured source evidence only means the evidence exists in the repo. It does not mean the evidence has been reviewed.

Runtime validation only means a behavior or state has been exercised. It does not mean the component, token, pattern, or system asset is promoted.

## Workflow Boundary

GitHub Issues are not the main workflow for this repo.

The local Agent must use repo files as the workflow source of truth:

- `registry/workflow-state.json`
- `registry/workflow-ledger.json`
- `registry/next-action.json`
- `registry/workflow-invariants.json`

## File Change Guardrails

Do not modify CSS, TSX, Storybook, or token values unless the current cycle explicitly allows that file type and scope.

Blocked by default:

- `src/**/*.css`
- `src/**/*.tsx`
- `src/**/*.stories.tsx`
- `stories/**`
- token `value` fields

## Status Guardrails

Do not write `accepted` or `promoted` as asset status values unless the current cycle explicitly allows acceptance or promotion.

Promotion must never happen automatically.

Acceptance must never happen as a side effect of evidence capture, runtime validation, verification, or CSS integration.

## Scope Guardrails

Each cycle advances one bounded workflow step.

If a cycle is a plan, it must not execute implementation. If a cycle is execution, it must not expand into promotion. If a cycle is verification, it must not add new evidence or new runtime behavior.

