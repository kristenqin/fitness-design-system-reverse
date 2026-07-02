# ADR-020: Plan Typography CSS Integration

## Status

Accepted as a planning gate.

## Context

Six typography semantic token values have been written, verified against the review matrix, and reviewed for transferability.

CSS integration still needs a separate plan so candidate token values do not become runtime styling rules without an explicit boundary, rollback policy, and validation path.

## Decision

Prepare a CSS integration plan for six typography tokens:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`

Do not write CSS in this cycle.

Tokens remain candidates. CSS integration remains `planned-not-written`. Promotion remains blocked.

## Consequences

- `registry/typography-css-integration-plan.json` records the planned CSS variables, target runtime surfaces, rollback policy, and validation requirements.
- Blocked typography tokens remain excluded.
- Runtime CSS remains local styling until a separate execution cycle.
- No token is accepted or promoted.
