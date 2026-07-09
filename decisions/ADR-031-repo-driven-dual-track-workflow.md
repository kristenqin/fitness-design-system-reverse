# ADR-031: Repo-Driven Dual-Track Workflow

## Status

Adopted for local workflow control.

No design-system asset changes promotion state in this ADR.

## Context

The reverse design-system repo now needs to support two goals at once:

- high-fidelity Figma restoration in local reverse runtime surfaces
- conservative design-system extraction for transferable assets

The previous single-action workflow file made it too easy for the next cycle pointer to become stale after a completed cycle.

The active product scope also needs to be durable: SummaryDashboard is the first workflow template target, and the workflow should not expand to other pages or Figma nodes until this template is complete.

## Decision

Use `registry/next-action.json` schema version 2.

Persist the active workflow goal in:

```text
registry/workflow-goal.json
```

The executable cycle is stored in:

```text
activeAction
```

The generated follow-up is stored in:

```text
nextRecommendedAction
```

The local Agent must execute `activeAction`, update workflow state and ledger, run the verifier, and only then commit and push when verification passes.

## Guardrails

High-fidelity restoration is runtime evidence, not automatic design-system promotion.

Stable design-system assets require explicit review cycles before promotion.

The workflow continues to block CSS, TSX, Storybook, and token value changes unless the active cycle explicitly allows them.

## Consequences

Future “execute next cycle” requests can start from `activeAction` instead of inferring from conversation history.

Cycle 43 is now the next executable action:

```text
Metric Typography CSS Runtime Validation
```

Promotion remains blocked unless a future explicit promotion cycle allows it.

The active scope remains SummaryDashboard-only unless a later workflow-control cycle explicitly changes the goal boundary.
