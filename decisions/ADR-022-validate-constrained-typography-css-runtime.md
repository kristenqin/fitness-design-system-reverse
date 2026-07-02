# ADR-022: Validate Constrained Typography CSS Runtime

## Status

Accepted as a runtime validation gate.

## Context

Constrained typography CSS integration connected four typography tokens to safe existing selectors and wrote variables for two selector-blocked record metadata tokens.

Runtime validation is needed before any promotion or selector expansion.

## Decision

Runtime-review connected typography selectors before promotion or selector expansion.

Runtime validation can identify visual risks but does not promote tokens.

`typography.record.duration` and `typography.record.date` remain selector-blocked until semantic selectors exist.

## Consequences

- Connected typography selectors are reviewed against existing runtime story coverage.
- Metric typography receives follow-up visual risks.
- Duration and date remain blocked as designed.
- No CSS, TSX, Storybook, or semantic token value changes occur in this validation cycle.
- No token is accepted or promoted.
