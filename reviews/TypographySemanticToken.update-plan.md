# Typography Semantic Token Update Plan

## Review Scope

This twenty-eighth cycle prepares a semantic token update plan for typography candidates.

It does not update semantic token values, read new source, add raw values, connect tokens to CSS, or promote any asset.

## Current State

Current state:

- raw typography values exist only in `registry/typography-raw-value-review-matrix.json`
- `tokens/semantic.tokens.json` values remain `{font.source.pending}`
- `typography.record.metadata` is `split-required`
- `typography.record.duration` and `typography.record.date` are candidates only
- semantic token writes, CSS integration, and promotion remain blocked

## Allowed Update Candidates

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`

## Blocked Tokens

- `typography.metric.caption`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`
- `typography.trend.*`
- `typography.reward.*`
- `color.*`
- `spacing.*`
- `density.dashboard`
- `state.*`
- `radius.policy`

## Source Value Location

Future values must come from:

```text
registry/typography-raw-value-review-matrix.json
```

The update plan does not copy raw values into itself.

## Target Semantic Token Paths

Future update targets:

- `tokens/semantic.tokens.json` / `typography.metric.value`
- `tokens/semantic.tokens.json` / `typography.metric.unit`
- `tokens/semantic.tokens.json` / `typography.metric.label`
- `tokens/semantic.tokens.json` / `typography.record.title`
- `tokens/semantic.tokens.json` / `typography.record.duration`
- `tokens/semantic.tokens.json` / `typography.record.date`

## Future Write Policy

Every planned entry requires an explicit token value update cycle before any semantic token value can change.

This cycle is plan-only.

## Pre-write Checks

Before a future write cycle, confirm:

- the review matrix entry is still `acceptance-candidate`
- the semantic token value is still `{font.source.pending}`
- no blocked fields are included
- `typography.record.metadata` remains excluded from value update
- CSS integration remains blocked
- promotion remains blocked

## Semantic Token Policy

`tokens/semantic.tokens.json` values remain pending placeholders.

No semantic token value is updated in this cycle.

## CSS Integration Policy

CSS integration remains blocked. Runtime CSS remains local styling.

## Promotion Impact

No token, component, pattern, or style-system asset is promoted.

## Next Cycle Recommendation

Run an explicit typography token value update cycle for the six planned candidates only. Keep CSS integration and promotion blocked until a later review.
