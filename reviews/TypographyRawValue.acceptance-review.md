# Typography Raw-value Acceptance Review

## Review Scope

This twenty-sixth cycle reviews the observed typography raw values already stored in `registry/typography-raw-value-review-matrix.json`.

This review does not read new source, add raw values, update semantic token values, connect tokens to CSS, or promote any asset.

## Source Read Result

The previous source read wrote observed typography evidence only into the review matrix.

Observed values are evidence only. They are not accepted semantic token values.

## Acceptance Criteria

An entry can become an acceptance candidate only when:

- its source role is matched,
- its raw fields are limited to allowed typography fields,
- it is not dependent on runtime CSS,
- it is not a blocked color, spacing, density, state, radius, layout, or CSS-variable field,
- it can move into a future semantic token update plan without direct token-value writes in this cycle.

Acceptance-candidate does not mean accepted.

## Acceptance Candidates

### `typography.metric.value`

Accepted as an acceptance candidate only. The source role is matched and the observed fields are constrained to typography fields.

### `typography.metric.unit`

Accepted as an acceptance candidate only. The unit role is observed adjacent to metric values and remains distinct from the value role.

### `typography.metric.label`

Accepted as an acceptance candidate only. The label role is observed across `Move`, `Steps`, and `Distance`.

### `typography.record.title`

Accepted as an acceptance candidate only. The record title role is observed in repeated workout cards and remains distinct from metadata.

## Pending Split Decision

### `typography.record.metadata`

This entry remains `pending-split-decision`.

Reason:

- duration and date are both source-backed record metadata,
- duration and date have different observed font sizes,
- one semantic token may be too broad to carry both roles safely.

Proposed tokens:

- `typography.record.duration`
- `typography.record.date`

This requires a schema change before any semantic token update plan.

## Not Found / Rejected

### `typography.metric.caption`

Not found. The mapped source node exposes metric labels, values, and units, but not a distinct caption role.

### `typography.record.label`

Not found. The mapped workout card nodes do not expose a distinct record label separate from title or metadata.

### `typography.record.unavailable`

Rejected. No source-backed unavailable record state was found; the role remains runtime-derived.

These entries are not eligible for semantic token update.

## Blocked Fields Check

No blocked fields are accepted by this review.

Blocked fields remain:

- color, fill, stroke, background, opacity
- spacing, padding, margin, gap
- radius, shadow, blur, gradient
- layout geometry, component position
- icon assets
- CSS variables
- semantic token values

## Semantic Token Write Policy

`tokens/semantic.tokens.json` values remain `{font.source.pending}`.

No semantic token value is updated in this review.

## CSS Integration Policy

CSS integration remains blocked. No runtime CSS file was changed.

## Promotion Impact

No token, component, pattern, or style-system asset is promoted.

Acceptance candidates are evidence states only and must not be treated as accepted or promoted tokens.

## Next Cycle Recommendation

Plan a semantic token update review for acceptance candidates only after resolving the `typography.record.metadata` split decision.

Do not update `tokens/semantic.tokens.json` values until a separate token update plan explicitly allows it.
