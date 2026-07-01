# ADR-016: Plan Typography Semantic Token Value Update

## Status

Accepted as a reverse-workflow constraint.

## Context

Typography raw values have been reviewed only inside `registry/typography-raw-value-review-matrix.json`.

`typography.record.metadata` has been split into candidate tokens `typography.record.duration` and `typography.record.date`. Semantic token values still remain pending placeholders.

## Decision

Prepare a semantic token update plan for six typography candidates:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`

Do not update semantic token values in this cycle.

Raw values remain in the review matrix. CSS integration and promotion remain blocked.

## Consequences

- Future token value work has an explicit plan and source location.
- Blocked tokens remain excluded from update planning.
- `tokens/semantic.tokens.json` keeps `{font.source.pending}` values.
- No token is accepted or promoted by this decision.
