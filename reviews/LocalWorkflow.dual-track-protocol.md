# Local Workflow Dual-Track Protocol

## Review Scope

This review covers the workflow protocol hardening that moves `registry/next-action.json` to schema version 2.

The change is workflow-control only. It does not advance design-system business state.

## Problem

The previous single-action `registry/next-action.json` could become stale after a cycle completed.

The local Agent needed a clearer boundary between:

- the action to execute next
- the action recommended after the current action completes

## Decision

Use a dual-slot action contract:

- `activeAction` is the executable cycle boundary.
- `nextRecommendedAction` is advisory until a later workflow update makes it active.

Cycle 43 is now the active next executable cycle:

```text
Metric Typography CSS Runtime Validation
```

## Dual-Track Policy

The workflow now names two tracks:

- Reverse Runtime Track: local reverse surfaces may pursue high-fidelity Figma restoration and runtime validation.
- Design-System Track: stable assets only absorb transferable decisions after explicit review cycles.

High-fidelity restoration does not automatically create design-system promotion.

## Durable Goal Boundary

The user-confirmed goal is persisted in:

```text
registry/workflow-goal.json
```

The active object scope is SummaryDashboard only. The purpose is to use this one source-backed surface to complete and harden the reverse design-system workflow before expanding it to other Figma nodes or product tasks.

## Verifier Update

The verifier now supports:

- legacy single-action files
- schema version 2 `activeAction`
- a transition verification action for workflow protocol migrations

The verifier still checks changed files, blocked paths, forbidden status values, and promotion boundaries.

## Current Next Action

`activeAction` points to Cycle 43:

```text
Metric Typography CSS Runtime Validation
```

The purpose is to validate Cycle 42 metric typography CSS execution without changing CSS, TSX, Storybook, or semantic token values.

## Files Not Changed

This protocol hardening does not modify:

- CSS runtime files
- TSX implementation files
- Storybook stories
- semantic token values

## Promotion Impact

No token, component, pattern, SummaryDashboard surface, or style-system asset changes promotion state.

## Next Step

Execute Cycle 43 through `activeAction`.
