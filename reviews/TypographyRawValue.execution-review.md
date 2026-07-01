# Typography Raw-value Review Execution

## Review Scope

This twenty-fifth cycle executes a constrained typography source read for prepared typography review entries.

The only write target for observed raw typography fields is:

```text
registry/typography-raw-value-review-matrix.json
```

No raw values were written to `tokens/semantic.tokens.json`, CSS, component implementation files, or Storybook stories.

## Source Read Scope

Source read was limited to already mapped Summary Dashboard component nodes:

- `143:25113` / `Stats`
- `143:25136` / `Card`
- `143:25151` / `Card`

No new Figma page was read. No unmapped nodes were explored. No Figma variables were extracted.

## Allowed Token Groups

- `typography.metric`
- `typography.record`

## Blocked Token Groups

- `color.*`
- `typography.trend`
- `typography.reward`
- `spacing.*`
- `density.dashboard`
- `state.*`
- `radius.policy`

## Entries Reviewed

### `typography.metric`

Observed:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`

Not found:

- `typography.metric.caption`

`typography.metric.caption` remains pending because the mapped `Stats` node exposes label, value, and unit roles, but not a distinct source-backed metric caption role.

### `typography.record`

Observed:

- `typography.record.title`
- `typography.record.metadata`

Rejected / not found:

- `typography.record.label`
- `typography.record.unavailable`

`typography.record.metadata` remains pending review because duration and date are both record metadata but have different observed typography sizes. A later acceptance gate should decide whether to split or constrain that role.

`typography.record.unavailable` was rejected for this source read because no source-backed unavailable record state exists in the mapped workout card nodes.

## Observed Fields

Only allowed typography fields were written into the review matrix:

- `fontFamily`
- `fontStyle`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `letterSpacing`
- `textCase`
- `textDecoration`

Observed entries remain `observed-pending-review`; none are accepted.

## Rejected / Not Found Entries

- `typography.metric.caption`: not found as a distinct source-backed caption role.
- `typography.record.label`: not found as a distinct role separate from title or metadata.
- `typography.record.unavailable`: rejected because unavailable record typography is runtime-derived in current evidence.

## Blocked Fields Excluded

The source read output contained visual and layout information, but blocked fields were not written to the review matrix.

Excluded fields include color, fill, stroke, background, opacity, spacing, padding, margin, gap, radius, shadow, blur, gradient, layout geometry, component position, icon asset, CSS variable, and semantic token value.

## Semantic Token Write Policy

`tokens/semantic.tokens.json` remains pending. The eight typography tokens still use `{font.source.pending}`.

The review matrix is the only file containing observed raw typography fields.

## CSS Integration Policy

CSS integration remains blocked. `SummaryDashboard.css` was not changed.

## Acceptance Status

No token passed acceptance review.

Observed values are raw review evidence only. They are not accepted semantic tokens and must not be treated as promoted design-system values.

## Raw Value Decision

Raw typography fields were written only to `registry/typography-raw-value-review-matrix.json`.

No semantic token value was changed.

## Promotion Impact

No token, component, pattern, or style-system asset was promoted.

## Next Cycle Recommendation

Run an acceptance review before any semantic token update. That review should decide:

- whether `typography.record.metadata` must split duration and date roles,
- whether `typography.metric.caption` should remain a runtime-only candidate,
- whether secondary / cautious record roles should stay pending or be removed,
- whether observed values are transferable beyond this captured source.
