# ADR-027: Metric Typography Normalization Boundary

## Status

Planned boundary.

No token, component, pattern, SummaryDashboard surface, or style-system asset is promoted by this ADR.

## Context

Cycle 38 created a plan for metric typography normalization after warning-level visual QA.

The plan identified `typography.metric.value`, `typography.metric.unit`, and `typography.metric.label` as the metric normalization scope.

The current question is whether that plan is concrete enough to allow CSS execution.

## Decision

Do not allow CSS execution yet.

Metric typography normalization needs a more specific adjustment proposal before any runtime styling change.

The next cycle should define:

- whether `typography.metric.value` remains unchanged or receives a density-safe adjustment
- the unit-to-value scale relationship
- the label density behavior for long localized labels
- whether unit and label share primitive characteristics while keeping separate semantic roles

## Constraints

This cycle does not modify CSS, TSX, Storybook stories, or semantic token values.

This cycle does not connect `typography.record.duration` or `typography.record.date`.

This cycle does not promote any asset.

## Consequences

Metric typography remains in a planned normalization state.

The next step is another planning cycle focused on the exact adjustment proposal, not CSS execution.

