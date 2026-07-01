# ADR-017: Execute Typography Semantic Token Value Update

## Status

Accepted as a constrained value-update execution.

## Context

The typography semantic token update plan allowed six typography candidates to receive values from the review matrix.

Blocked typography tokens remain ineligible for value update.

## Decision

Write semantic token values for six planned typography candidates:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`

Values come only from `registry/typography-raw-value-review-matrix.json`.

Updated tokens remain candidates. CSS integration and promotion remain blocked. Blocked typography tokens remain pending.

## Consequences

- Typography token values now exist for the six planned candidates.
- The values are not connected to CSS.
- No token is accepted or promoted.
- Color, spacing, density, state, radius, trend typography, and reward typography remain out of scope.
