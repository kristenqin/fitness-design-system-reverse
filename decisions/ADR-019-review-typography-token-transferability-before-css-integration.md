# ADR-019: Review Typography Token Transferability Before CSS Integration

## Status

Accepted as a CSS-integration prerequisite.

## Context

Six typography semantic token values have been written and verified against the typography raw-value review matrix.

Verification confirms value accuracy, but it does not prove that the values are transferable across products or safe for CSS integration.

## Decision

Review typography token transferability before CSS integration planning.

Transferable tokens can enter a future CSS integration plan.

Verified tokens remain candidates. CSS integration and promotion remain blocked.

## Consequences

- `typography.record.title` and `typography.record.date` become transferable candidates.
- `typography.metric.value`, `typography.metric.unit`, `typography.metric.label`, and `typography.record.duration` are transferable with constraints.
- Blocked typography tokens remain excluded from transfer.
- No token is accepted or promoted.
- Runtime CSS remains local styling until a separate integration plan.
