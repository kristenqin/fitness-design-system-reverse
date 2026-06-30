# Typography Raw-value Review Matrix Preparation

## Review Scope

This twenty-fourth cycle prepares the review matrix for future constrained typography raw-value review.

The scope is limited to:

- `typography.metric`
- `typography.record`

This cycle does not read Figma, extract raw typography values, write raw token values, update CSS, accept tokens, or promote any component, pattern, or style-system asset.

## Basis from Previous Cycle

The twenty-third cycle created `registry/typography-raw-value-extraction-plan.json` and allowed only `typography.metric` and `typography.record` to move toward constrained raw-value planning.

That plan also established that future values must first land in a review matrix. This cycle prepares that matrix without starting extraction.

## Matrix Purpose

`registry/typography-raw-value-review-matrix.json` is the future landing zone for constrained typography source readings.

It exists to prevent raw values from being written directly to `tokens/semantic.tokens.json`. Future readings must be reviewed as evidence first, then accepted or rejected in a later gate.

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

## Review Entry Schema

Each review entry records:

- token id
- token group
- source role
- priority
- source evidence strength
- planned typography fields
- future raw values, all currently null
- raw-value, review, acceptance, semantic-token-write, CSS-integration, and promotion statuses
- evidence required before acceptance
- rejection criteria

## Planned Entries

### `typography.metric`

Prepared entries:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.metric.caption`

These are primary entries because metric typography has the clearest current source-backed role evidence in the Summary Dashboard evidence chain.

### `typography.record`

Prepared entries:

- `typography.record.title`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`

`typography.record.title` and `typography.record.metadata` are primary entries. `typography.record.label` and `typography.record.unavailable` are secondary and cautious. `typography.record.unavailable` is mostly runtime-derived and must be rejected later if no source-backed unavailable record state is confirmed.

## Future Raw Value Fields

Future raw values may only use these typography fields:

- `fontFamily`
- `fontStyle`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `letterSpacing`
- `textCase`
- `textDecoration`

All future raw values are currently `null`.

## Fields That Must Stay Blocked

Blocked fields include:

- color, fill, stroke, background, opacity
- spacing, padding, margin, gap
- radius, shadow, blur, gradient
- layout geometry and component position
- icon assets
- CSS variables
- semantic token values

## Write Policy

Future values must first land in `registry/typography-raw-value-review-matrix.json`.

They must not be written directly to `tokens/semantic.tokens.json`.

## Acceptance Gate

A later cycle may only consider acceptance if:

- the source role matches the planned semantic token
- the read stays within constrained typography fields
- the evidence is source-backed, not runtime CSS
- the value appears transferable beyond the captured source
- no blocked fields are included

## Rejection Gate

A candidate must be rejected if:

- it needs additional unapproved Figma reads
- it includes color, spacing, density, radius, state, layout, or CSS-variable data
- it comes from local runtime styling
- it cannot be mapped to the planned semantic role
- it would write directly to semantic tokens before review acceptance

## Semantic Token Policy

`tokens/semantic.tokens.json` remains pending. Its values continue to use `{font.source.pending}`.

No token is accepted or promoted in this cycle.

## CSS Integration Policy

CSS integration remains blocked. Runtime CSS is still local styling and is not source evidence.

## Promotion Impact

Preparing the review matrix does not promote the typography token system, SummaryDashboard, or any reverse component.

## Next Cycle Recommendation

If explicitly approved later, perform a constrained source typography read for only `typography.metric` and `typography.record`, then write the observed typography fields into the review matrix first. Do not update semantic token values until a separate acceptance review.
