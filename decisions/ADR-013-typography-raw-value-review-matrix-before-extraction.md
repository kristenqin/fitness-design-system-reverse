# ADR-013: Typography Raw-value Review Matrix Before Extraction

## Status

Accepted as a reverse-workflow constraint.

## Context

The token readiness gate allowed only `typography.metric` and `typography.record` to move into constrained raw-value planning.

Raw typography values are still pending. Writing future values directly into `tokens/semantic.tokens.json` would skip evidence review and make local runtime styling look more stable than it is.

## Decision

Prepare `registry/typography-raw-value-review-matrix.json` before any raw typography extraction.

Future values must land in the review matrix first. `tokens/semantic.tokens.json` remains pending until a later acceptance gate explicitly approves semantic token updates.

No token is accepted or promoted by this decision. CSS integration remains blocked.

## Consequences

- `typography.metric` and `typography.record` have a prepared review surface.
- Future constrained typography readings have a safe landing zone.
- Color, spacing, density, state, radius, trend typography, and reward typography remain blocked from this path.
- Raw values remain pending.
- Runtime CSS remains local implementation styling.
