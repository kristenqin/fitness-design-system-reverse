# ADR-011: Token Readiness Gate Before Raw Values

## Status

Accepted

## Context

High-priority and medium-priority source visual evidence reviews are complete at `reviewed-draft` level. Raw values remain pending, CSS remains local runtime styling, and `radius.policy` remains deferred.

The project needs a readiness gate before planning any raw-value extraction so weakly evidenced groups do not move into extraction simply because they have token names.

## Decision

Run a token readiness gate before raw-value planning.

- `typography.metric` and `typography.record` may enter constrained raw-value extraction planning.
- No token group is ready for direct raw-value extraction.
- Color groups require contrast review before raw-value planning.
- State groups require stronger state evidence before raw-value planning.
- Spacing and density require transferability review before raw-value planning.
- `radius.policy` remains deferred.
- No token is accepted or promoted.
- No raw value is written.
- CSS remains local runtime styling.

## Consequences

- `registry/token-readiness-gate-matrix.json` records group-level readiness decisions.
- `registry/style-token-evidence-matrix.json` and `tokens/semantic.tokens.json` can carry readiness metadata without changing token values.
- Future raw-value work must start with a constrained plan, not extraction.
- Promotion remains blocked until raw values, contrast, state evidence, transferability, and CSS integration are reviewed separately.
