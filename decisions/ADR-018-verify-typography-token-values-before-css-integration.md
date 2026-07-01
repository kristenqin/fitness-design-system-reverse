# ADR-018: Verify Typography Token Values Before CSS Integration

## Status

Accepted as a verification gate.

## Context

Six typography semantic token values have been written from the typography raw-value review matrix.

Before any CSS integration planning, the written values need to be checked against the review matrix so token values do not drift from the evidence artifact.

## Decision

Verify written typography token values against `registry/typography-raw-value-review-matrix.json` before CSS integration planning.

Verified tokens remain candidates.

CSS integration and promotion remain blocked.

## Consequences

- Typography token values are confirmed against the review matrix.
- Blocked typography tokens remain pending.
- No token is accepted or promoted by verification.
- Runtime CSS remains local styling until a separate integration gate.
