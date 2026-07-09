# Metric Typography CSS Execution Plan

## Review Scope

This forty-first cycle defines the CSS execution boundary for metric typography normalization.

It does not write CSS. It does not change TSX, Storybook stories, semantic token values, or promotion state.

## Source Evidence Reviewed

- `registry/metric-typography-normalization-adjustment-plan.json`
- `reviews/MetricTypography.adjustment-plan.md`
- `decisions/ADR-028-plan-metric-typography-adjustment.md`
- `registry/metric-typography-normalization-execution-boundary.json`
- `registry/metric-typography-normalization-plan.json`
- `registry/typography-css-runtime-validation-matrix.json`
- `registry/style-token-evidence-matrix.json`

## Execution Boundary

A future CSS execution cycle may target only MetricCard metric typography selectors:

- `.sdr-metric-card strong`
- `.sdr-metric-card small`
- `.sdr-metric-card p`

The future execution scope is limited to:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`

## Planned CSS Intent

`typography.metric.value` remains the hierarchy anchor.

`typography.metric.unit` and `typography.metric.label` may share supporting primitive behavior, while their semantic token identities stay separate.

The future CSS execution should be limited to selector-level references or metric-scope overrides. It must not write semantic token values.

## Blocked Scope

- `typography.metric.caption`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`
- typography trend and reward tokens
- color tokens
- spacing tokens
- density tokens
- state tokens
- radius policy

Record duration and date remain selector-blocked and require a separate selector strategy.

## Future Execution Prechecks

- Confirm CSS changes are limited to MetricCard metric typography selectors.
- Confirm no TSX selector changes are needed.
- Confirm semantic token values remain unchanged.
- Run workflow verifier after the CSS execution cycle.
- Run build after the CSS execution cycle if that cycle allows it.

## Promotion Impact

No token, component, pattern, SummaryDashboard surface, or style-system asset changes promotion state.

## Next Cycle Recommendation

Run a narrowly scoped Metric Typography CSS Execution cycle.

That cycle must explicitly allow CSS changes and must keep TSX, Storybook, semantic token values, promotion, and blocked token groups out of scope.

