# ADR-009: Semantic Token Evidence Before Raw Values

## Status

Accepted

## Context

SummaryDashboard optional semantic runtime composition now covers the first concept loop at pattern level:

```text
Goal -> Behavior -> Record -> Trend -> Reward
```

The runtime surface can identify stable roles for progress, metric context, records, trends, rewards, unavailable states, interactive states, dashboard spacing, density, and radius policy. However, the visual system is still local runtime CSS and source values are not reviewed.

## Decision

Establish semantic token evidence mapping before extracting raw values.

- Token names may be added as candidates when runtime roles are stable enough.
- Raw values remain pending placeholders.
- Tokens are not connected to CSS in this cycle.
- No token is promoted or accepted.

## Consequences

- `tokens/semantic.tokens.json` can grow with candidate names, `status`, and `evidenceRefs`.
- `registry/style-token-evidence-matrix.json` becomes the planning map between runtime evidence and future source-backed token work.
- Future raw-value extraction must validate these semantic candidates against source evidence, accessibility contrast, and transferability needs before promotion.
