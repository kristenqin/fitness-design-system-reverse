# ADR-021: Execute Constrained Typography CSS Integration

## Status

Accepted as constrained execution.

## Context

The typography CSS integration plan identified six candidate typography tokens for scoped runtime CSS integration.

Only four tokens have safe existing runtime selectors. `typography.record.duration` and `typography.record.date` do not have separate selectors in the current WorkoutItem runtime surface.

## Decision

Write scoped typography CSS variables in `SummaryDashboard.css`.

Connect only tokens with safe existing selectors:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`

Do not connect `typography.record.duration` or `typography.record.date` until selectors can distinguish them without unsafe overreach.

Tokens remain candidates. Runtime validation is required before promotion.

## Consequences

- CSS variables now exist for six planned typography tokens.
- Four typography tokens are connected to existing selectors.
- Record duration and date remain variables-written but selector-blocked.
- No TSX or Storybook file is changed.
- No token is accepted or promoted.
