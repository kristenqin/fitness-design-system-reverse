# ADR-024: Execute Typography CSS Visual QA

## Status

Accepted as visual QA execution.

## Context

The visual QA plan identified MetricCard, WorkoutItem, SummaryDashboard, and Style System/Typography runtime surfaces as required QA targets after constrained typography CSS integration.

Metric typography carried the highest risk because metric unit and label use absolute source values.

## Decision

Execute visual QA against MetricCard, WorkoutItem, SummaryDashboard, and Style System/Typography runtime surfaces.

Metric typography remains warning-level and needs normalization review.

Record title remains acceptable as candidate evidence.

`typography.record.duration` and `typography.record.date` remain selector-blocked.

No token is accepted or promoted.

## Consequences

- Overall visual QA result is warning.
- Style-token promotion readiness remains not-ready.
- Metric typography normalization becomes the next likely typography-token workflow.
- Duration/date require selector strategy before connection.
- CSS, TSX, Storybook, and semantic token values remain unchanged.
