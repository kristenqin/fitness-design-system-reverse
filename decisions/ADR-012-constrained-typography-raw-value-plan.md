# ADR-012: Constrained Typography Raw-value Plan

## Status

Accepted

## Context

The Token Readiness Gate concluded that only `typography.metric` and `typography.record` are ready for constrained raw-value extraction planning. No token group is ready for direct raw-value extraction.

The project needs a narrow planning artifact before any typography raw values are read, so the next cycle cannot accidentally write values directly into semantic tokens or expand into color, spacing, density, state, or radius work.

## Decision

Create a constrained typography-only raw-value extraction plan.

- Only `typography.metric` and `typography.record` enter constrained raw-value planning.
- No raw values are extracted in this cycle.
- Future raw values must land in a review matrix first.
- `tokens/semantic.tokens.json` remains pending.
- No token is accepted or promoted.
- CSS remains local runtime styling.

## Consequences

- `registry/typography-raw-value-extraction-plan.json` defines the allowed and blocked token groups.
- Future raw typography values must first be reviewed in `registry/typography-raw-value-review-matrix.json`.
- Color, spacing, density, state, and radius groups remain blocked from raw-value planning.
- Promotion remains blocked until future evidence, review, and acceptance gates are completed.
