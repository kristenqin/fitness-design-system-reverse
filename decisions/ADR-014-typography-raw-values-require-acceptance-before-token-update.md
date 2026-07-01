# ADR-014: Typography Raw Values Require Acceptance Before Token Update

## Status

Accepted as a reverse-workflow constraint.

## Context

Constrained typography source reads can place observed fields in `registry/typography-raw-value-review-matrix.json`.

Those observed fields are evidence only. Writing them directly into `tokens/semantic.tokens.json` would skip the acceptance gate and blur the boundary between source evidence and promoted design-system rules.

## Decision

Observed raw typography values must pass acceptance review before any semantic token update plan.

Acceptance-candidate does not mean accepted.

`tokens/semantic.tokens.json` remains pending. CSS integration remains blocked. No token is promoted by this decision.

`typography.record.metadata` requires a split decision before token update planning because duration and date have different observed font sizes.

## Consequences

- `typography.metric.value`, `typography.metric.unit`, `typography.metric.label`, and `typography.record.title` can move only to a future semantic token update plan.
- `typography.record.metadata` must resolve whether it splits into `typography.record.duration` and `typography.record.date`.
- `typography.metric.caption`, `typography.record.label`, and `typography.record.unavailable` are not eligible for semantic token updates from current evidence.
- Semantic token values remain pending placeholders.
- CSS remains local runtime styling.
