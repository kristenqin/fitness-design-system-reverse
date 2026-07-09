# Metric Typography Adjustment Plan

## Review Scope

This fortieth cycle defines the adjustment strategy for metric typography.

It does not change CSS, TSX, Storybook stories, semantic token values, or promotion state.

## Source Evidence Reviewed

- `registry/metric-typography-normalization-execution-boundary.json`
- `reviews/MetricTypography.execution-boundary-review.md`
- `decisions/ADR-027-metric-typography-normalization-boundary.md`
- `registry/metric-typography-normalization-plan.json`
- `reviews/MetricTypography.normalization-plan.md`
- `registry/typography-css-visual-qa-execution.json`
- `registry/typography-css-runtime-validation-matrix.json`

## Adjustment Decision

Metric semantic tokens stay separated.

`typography.metric.unit` and `typography.metric.label` may share a supporting metric primitive in a later CSS planning or execution cycle, but they must keep distinct semantic token identities.

`typography.metric.value` remains the hierarchy anchor and should not share primitives with unit or label.

## Token Plan

### typography.metric.value

Keep as the metric hierarchy anchor.

Before any CSS write, confirm whether the current source-derived value style can remain unchanged or needs a density-safe adjustment.

### typography.metric.unit

Treat as a supporting role paired with value.

It may share supporting primitive characteristics with label, but its semantic role remains the metric unit.

### typography.metric.label

Treat as compact supporting copy.

It may share supporting primitive characteristics with unit, but it must not collapse into caption semantics.

## Blocked Scope

- `typography.metric.caption`
- `typography.record.duration`
- `typography.record.date`
- typography trend and reward tokens
- color tokens
- spacing tokens
- density tokens
- state tokens
- radius policy

Duration and date remain selector-blocked and require a separate selector strategy.

## CSS Execution Decision

CSS execution is still blocked in this cycle.

The next step should be a CSS execution plan, not a CSS write.

## Promotion Impact

No token, component, pattern, SummaryDashboard surface, or style-system asset changes promotion state.

## Next Cycle Recommendation

Create a Metric Typography CSS Execution Plan that defines the exact selector-level write boundary before any CSS execution is allowed.

