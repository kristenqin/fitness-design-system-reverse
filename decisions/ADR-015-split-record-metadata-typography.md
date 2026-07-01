# ADR-015: Split Record Metadata Typography

## Status

Accepted as a reverse-workflow constraint.

## Context

`typography.record.metadata` was marked `pending-split-decision` after the typography raw-value acceptance review.

The existing review matrix evidence shows duration metadata and date metadata as separate source-backed roles with different observed font sizes.

## Decision

Split `typography.record.metadata` into:

- `typography.record.duration`
- `typography.record.date`

Keep `typography.record.metadata` as `split-required` until cleanup or migration planning is explicitly scoped.

The new tokens are candidates only. Semantic token values remain pending. CSS integration and promotion remain blocked.

## Consequences

- Record duration and date can move into a future semantic token update plan as separate candidates.
- `typography.record.metadata` is not deleted yet.
- No semantic token value is written in this cycle.
- No token is accepted or promoted.
- Runtime CSS remains local styling.
