# Typography Record Metadata Split Decision

## Review Scope

This twenty-seventh cycle resolves the pending split decision for `typography.record.metadata`.

This review does not read new source, add new raw reads, update semantic token values, connect tokens to CSS, or promote any asset.

## Problem

`typography.record.metadata` currently covers both duration and date metadata in workout records.

The observed evidence shows that duration and date are both source-backed record metadata roles, but they use different observed font sizes. A single shared token would hide that difference and make later semantic token updates unsafe.

## Source Evidence

Existing review matrix evidence shows:

- duration role observed font size: `30px`
- date role observed font size: `16px`
- source ref: `figma-node-143-23952`
- source node refs: `143:25136`, `143:25151`

This evidence comes from the existing `registry/typography-raw-value-review-matrix.json`. No new source read occurred.

## Decision

`typography.record.metadata` should split.

Decision:

```text
split-record-metadata
```

## Proposed Tokens

### `typography.record.duration`

Candidate token for workout record duration metadata.

It is a candidate only. Its semantic token value remains `{font.source.pending}`.

### `typography.record.date`

Candidate token for workout record date metadata.

It is a candidate only. Its semantic token value remains `{font.source.pending}`.

## Old Token Policy

`typography.record.metadata` is kept as `split-required`.

It should not be deleted yet because cleanup or migration planning has not been scoped.

## Semantic Token Policy

All semantic token values remain pending.

New tokens are candidates only:

- `typography.record.duration`
- `typography.record.date`

No token is accepted in this cycle.

## CSS Integration Policy

CSS integration remains blocked. No runtime CSS was changed.

## Promotion Impact

No token, component, pattern, or style-system asset is promoted.

## Next Cycle Recommendation

Create a semantic token update plan for split record metadata candidates. That plan should keep `typography.record.metadata` until cleanup or migration is explicitly scoped, and it should still block CSS integration until token values are accepted in a later gate.
