# ADR-029: Plan Metric Typography CSS Execution

## Status

Planned.

No token, component, pattern, SummaryDashboard surface, or style-system asset changes promotion state in this ADR.

## Context

Cycle 40 defined the metric typography adjustment strategy:

- keep `typography.metric.value` as the hierarchy anchor
- allow `typography.metric.unit` and `typography.metric.label` to share supporting primitive behavior later
- keep semantic token identities separate

The next step is to define the exact CSS execution boundary before any style write.

## Decision

Allow a future CSS execution cycle to target only MetricCard metric typography selectors:

- `.sdr-metric-card strong`
- `.sdr-metric-card small`
- `.sdr-metric-card p`

The future execution may address:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`

## Constraints

This cycle does not modify CSS.

This cycle does not modify TSX, Storybook stories, or semantic token values.

This cycle does not connect record duration or date selectors.

This cycle does not change promotion state.

## Consequences

The next cycle can be a narrowly scoped CSS execution cycle if it explicitly allows CSS changes.

The execution must remain metric-selector-only and must not promote any asset.

