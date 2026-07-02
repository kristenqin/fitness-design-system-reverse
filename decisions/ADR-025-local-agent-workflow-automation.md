# ADR-025: Local Agent Workflow Automation

## Status

Workflow scaffolded. No design-system asset is promoted by this ADR.

## Context

The reverse design-system workflow has been driven through a long sequence of bounded review, planning, execution, verification, and decision cycles.

That conversation-driven flow is useful, but it is not durable enough for local Agent execution unless the workflow state, next action, guardrails, and verification rules live inside the repo.

## Decision

Move the workflow control surface into repo files:

- `.agent/workflows/design-system-reverse.workflow.md`
- `.agent/workflows/cycle-template.md`
- `.agent/workflows/guardrails.md`
- `.agent/workflows/verifier.md`
- `registry/workflow-state.json`
- `registry/workflow-ledger.json`
- `registry/next-action.json`
- `registry/workflow-invariants.json`
- `scripts/verify-workflow-cycle.mjs`

The local Agent must advance only one cycle at a time.

Each cycle must read `registry/next-action.json`, obey `.agent/workflows/guardrails.md`, and run the verifier before completion.

## Guardrail

Promotion requires an explicit promotion cycle. It must never happen automatically.

Acceptance also requires an explicit acceptance cycle. It must not happen as a side effect of evidence capture, runtime validation, token value writing, CSS integration, or verification.

## Consequences

The repo now has a machine-readable workflow handoff path for local Agent work.

The workflow can be validated without relying on GitHub Issues as the primary source of truth.

The scaffold does not change CSS, TSX, Storybook, or token values.

The scaffold does not promote any component, pattern, token, or style-system asset.
