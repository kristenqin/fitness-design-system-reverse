# Design System Reverse Workflow

This file is the local Agent entry point for the repo-driven reverse design-system workflow.

The workflow remains evidence-first and dual-track:

```text
Figma evidence
-> registry structure
-> product semantics
-> component and pattern specs
-> tokens and implementation
-> Storybook runtime validation
-> decision records
-> workflow state and verification
```

## Dual-Track Policy

The reverse runtime track may pursue high-fidelity Figma restoration inside local reverse surfaces.

The design-system track may only absorb transferable rules, tokens, components, and patterns after explicit review cycles.

High-fidelity restoration is evidence for review. It is not promotion.

## Agent Execution Order

For each cycle, the local Agent must read:

1. `.agent/workflows/guardrails.md`
2. `.agent/workflows/cycle-template.md`
3. `registry/workflow-state.json`
4. `registry/workflow-ledger.json`
5. `registry/next-action.json`
6. `registry/workflow-invariants.json`
7. `registry/workflow-goal.json`

Then the Agent may perform exactly one cycle described by `registry/next-action.json`.

For schema version 2, the executable cycle is:

```text
registry/next-action.json -> activeAction
```

`nextRecommendedAction` is generated or updated during cycle completion. It is not executable until it becomes `activeAction`.

## Current Goal Boundary

The durable goal boundary lives in:

```text
registry/workflow-goal.json
```

The current goal is to use SummaryDashboard as the first complete reverse design-system workflow template.

Until an explicit cycle expands scope, the workflow must stay within the SummaryDashboard evidence and reverse surface.

## Cycle Boundary

Each cycle must define:

- cycle number
- cycle name
- mode
- allowed changes
- blocked changes
- explicit promotion policy
- explicit token value policy
- validation required before completion
- next recommended action policy

If a requested action is not explicitly allowed by the current cycle, it is blocked.

## Verification

Before a cycle is considered complete, run:

```bash
node scripts/verify-workflow-cycle.mjs
```

The verifier is intentionally conservative. Passing verification does not promote any asset. It only confirms that the changed files and status values stay inside the current repo-defined workflow boundary.

For schema version 2, the verifier checks changed files against `activeAction`. A transition action may exist only to verify workflow protocol migrations.

## Workflow Source of Truth

GitHub Issues are not the main workflow source of truth for this project.

The primary workflow state lives in:

- `registry/workflow-state.json`
- `registry/workflow-ledger.json`
- `registry/next-action.json`
- `registry/workflow-invariants.json`
- `registry/workflow-goal.json`

Decision records remain the durable rationale layer.
