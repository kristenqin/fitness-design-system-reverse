# ADR-030: Execute Metric Typography CSS

## Status

Executed.

No token, component, pattern, SummaryDashboard surface, or style-system asset changes promotion state in this ADR.

## Context

Cycle 41 planned a narrow CSS execution boundary for MetricCard metric typography.

The allowed selectors were:

- `.sdr-metric-card strong`
- `.sdr-metric-card small`
- `.sdr-metric-card p`

## Decision

Execute selector-level supporting normalization for:

- `.sdr-metric-card small`
- `.sdr-metric-card p`

Preserve `.sdr-metric-card strong` as the metric hierarchy anchor.

Do not change semantic token values.

## Constraints

This cycle does not modify TSX or Storybook stories.

This cycle does not modify `tokens/semantic.tokens.json`.

This cycle does not connect record duration or date selectors.

This cycle does not change promotion state.

## Consequences

Metric unit and label now have selector-level supporting typography normalization.

The next cycle must validate this CSS execution in runtime surfaces before any further adjustment.

