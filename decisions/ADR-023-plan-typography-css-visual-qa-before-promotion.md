# ADR-023: Plan Typography CSS Visual QA Before Promotion

## Status

Accepted as a visual QA planning gate.

## Context

Constrained typography CSS runtime validation found follow-up visual risks, especially for metric unit and label typography using absolute source values.

Before any promotion or broader CSS integration, the project needs an explicit visual QA plan.

## Decision

Prepare a visual QA plan before any promotion or broader CSS integration.

Visual QA must execute before promotion.

Tokens remain candidates.

CSS, TSX, Storybook, and token values remain unchanged in this planning cycle.

## Consequences

- MetricCard, WorkoutItem, SummaryDashboard, and Style System/Typography runtime surfaces are planned for visual QA.
- Metric typography is treated as the highest risk.
- `typography.record.duration` and `typography.record.date` remain selector-blocked.
- No token is accepted or promoted.
