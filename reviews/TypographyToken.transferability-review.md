# Typography Token Transferability Review

## Review Scope

This thirty-first cycle reviews the transferability of the six verified typography semantic token values.

The review does not read new source, add raw values, change token values, connect tokens to CSS, update components, create Storybook stories, or promote any asset.

## Current State

Six typography tokens have verified values copied from `registry/typography-raw-value-review-matrix.json`:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`

Blocked typography tokens remain pending:

- `typography.metric.caption`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`

Verified values remain candidate token values. They are not accepted tokens.

## Review Criteria

Transferability is reviewed against:

- role clarity
- reuse potential outside the captured source surface
- source-specific visual risk
- semantic stability
- CSS integration readiness
- promotion safety

## Transferable Candidates

The following tokens are transferable candidates:

- `typography.record.title`
- `typography.record.date`

These roles are source-backed, semantically clear, and less dependent on source-specific display emphasis. They still require an explicit CSS integration plan before use in runtime styling.

## Transferable With Constraints

The following tokens are transferable with constraints:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.duration`

Metric typography is source-backed, but it carries source-specific display emphasis and needs risk handling before CSS integration.

`typography.record.duration` is source-backed but visually prominent. It requires hierarchy normalization before CSS integration.

## Blocked From Transfer

The following tokens remain blocked from transfer:

- `typography.metric.caption`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`

`typography.record.metadata` remains split-required and retained only for cleanup or migration planning. The other blocked entries do not have sufficient source-backed transferability evidence.

## Source-specific Risks

Metric value, unit, and label typography may encode source-specific dashboard emphasis. They should not become broad metric rules until another integration gate checks density, localization, and non-fitness product usage.

Record duration may encode source-specific hierarchy because it is much more prominent than date metadata.

## CSS Integration Policy

CSS integration remains blocked.

Transferability review can inform a future CSS integration plan, but it does not connect tokens to CSS.

## Promotion Impact

No token, style-system asset, component, pattern, or SummaryDashboard surface is promoted.

No token is accepted.

## Issues Found

No value mismatch was found, but transferability is uneven:

- record title and record date are the strongest candidates,
- metric tokens need source-specific risk handling,
- record duration needs hierarchy normalization,
- blocked typography tokens remain excluded.

## Next Cycle Recommendation

Prepare a constrained typography CSS integration plan only for transferability-reviewed candidates.

Keep CSS integration blocked until that plan explicitly defines target CSS surfaces, rollback rules, and non-promoted runtime validation.
