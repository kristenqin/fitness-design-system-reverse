# ADR-028: Plan Metric Typography Adjustment

## Status

Planned.

No token, component, pattern, SummaryDashboard surface, or style-system asset changes promotion state in this ADR.

## Context

Cycle 39 blocked direct CSS execution because metric typography normalization did not yet have a concrete adjustment proposal.

The highest-risk roles are `typography.metric.unit` and `typography.metric.label`, which visual QA flagged for normalization review.

## Decision

Keep metric semantic tokens separated.

Allow a future plan to consider a shared supporting primitive for:

- `typography.metric.unit`
- `typography.metric.label`

Do not apply that primitive to:

- `typography.metric.value`
- `typography.metric.caption`

`typography.metric.value` remains the hierarchy anchor.

## Constraints

This cycle does not modify CSS, TSX, Storybook stories, or semantic token values.

This cycle does not connect record duration or date selectors.

This cycle does not change promotion state.

## Consequences

The next cycle can plan CSS execution boundaries with a clearer target:

- preserve the value hierarchy anchor
- normalize unit and label as supporting roles
- keep semantic tokens separate even if supporting primitives converge later

