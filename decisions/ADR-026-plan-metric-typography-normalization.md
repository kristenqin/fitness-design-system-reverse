# ADR-026: Plan Metric Typography Normalization

## Status

Planned.

No token, component, pattern, or style-system asset is promoted by this ADR.

## Context

Typography CSS visual QA recorded warning-level results for metric typography.

The connected runtime surface is usable as candidate evidence, but metric unit and label still need normalization review. Metric typography may also overfit the captured dashboard emphasis.

Record duration and date remain selector-blocked and are outside this metric normalization plan.

## Decision

Create a planning boundary for metric typography normalization.

The plan covers:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`

The plan treats `typography.record.title` as reference-only and keeps `typography.metric.caption`, `typography.record.duration`, and `typography.record.date` blocked from this normalization scope.

## Constraints

This cycle does not change CSS, TSX, Storybook stories, or semantic token values.

This cycle does not promote any asset.

Any future CSS normalization must use an explicit CSS execution cycle.

## Consequences

Metric typography now has a clear normalization plan before any further CSS adjustment.

Unit and label can be reviewed for primitive sharing without merging their semantic roles.

Duration and date remain deferred until a selector strategy exists.

