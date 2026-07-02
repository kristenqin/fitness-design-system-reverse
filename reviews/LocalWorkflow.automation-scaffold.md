# Local Workflow Automation Scaffold

## Review Scope

This review covers the local workflow automation scaffold for the reverse design-system repo.

The scaffold turns the current conversation-driven workflow into repo-readable files for local Agent execution and verification.

## What This Cycle Does

- Adds local Agent workflow instructions under `.agent/workflows/`.
- Adds workflow state, ledger, next-action, and invariant registry files.
- Adds an MVP verifier script.
- Adds an ADR for repo-file-driven workflow automation.

## What This Cycle Does Not Do

This cycle does not advance design-system business state.

It does not modify:

- CSS
- TSX
- Storybook stories
- token values
- component implementation
- pattern implementation

It does not promote any component, pattern, token, style-system asset, or system model.

## Current State Recorded

The workflow state records:

- current cycle: 36
- typography CSS visual QA execution: reviewed-with-warnings
- overall visual QA result: warning
- promotion readiness: not-ready
- promotion status: not-promoted
- next recommended cycle: Metric Typography Normalization Plan

## Next Local Agent Entry

Future local Agent cycles should start from:

```text
registry/next-action.json
```

The next action currently points to cycle 38:

```text
Metric Typography Normalization Plan
```

That cycle is plan-only and blocks CSS, TSX, Storybook, and token value changes.

## Guardrail Result

The scaffold keeps the core workflow boundaries explicit:

- captured evidence is not reviewed evidence
- runtime-tested is not promoted
- Storybook is runtime validation, not showcase
- GitHub Issues are not the primary workflow source of truth
- promotion and acceptance require an explicit cycle

## Verifier Result

The verifier is intentionally MVP-level.

It can check changed files against allowed and blocked paths, detect forbidden status values in changed JSON files, and require `promotionStatus` to stay `not-promoted`.

Passing verification does not promote anything.

## Promotion Impact

No promotion impact.

Promotion remains blocked until an explicit promotion cycle is defined and completed.

