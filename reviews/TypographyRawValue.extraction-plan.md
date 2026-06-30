# Typography Raw-value Extraction Plan

## Review Scope

This twenty-third-cycle plan defines a constrained raw-value extraction plan for typography only.

In scope:

- `typography.metric`
- `typography.record`
- Future extraction field boundaries
- Future write policy
- Acceptance and rejection criteria

Out of scope:

- Reading more Figma nodes
- Capturing new screenshots
- Extracting Figma variables
- Extracting raw token values in this cycle
- Writing real typography values
- Updating `tokens/semantic.tokens.json` values
- Connecting tokens to CSS
- Accepting or promoting tokens
- Color, spacing, density, state, and radius work

## Readiness Gate Basis

The twenty-second-cycle Token Readiness Gate concluded:

- `typography.metric` is ready for constrained raw-value extraction planning.
- `typography.record` is ready for constrained raw-value extraction planning.
- No token group is ready for direct raw-value extraction.
- Color groups still need contrast review.
- Trend, reward, unavailable, and interactive state groups still need stronger state evidence.
- Spacing and density still need transferability review.
- `radius.policy` remains deferred.

## Allowed Token Groups

- `typography.metric`
- `typography.record`

These groups may enter planning only. This plan does not authorize extraction.

## Blocked Token Groups

- `color.*`
- `typography.trend`
- `typography.reward`
- `spacing.*`
- `density.dashboard`
- `state.*`
- `radius.policy`

Blocked groups must not be included in a typography extraction pass.

## Source Scope

Future extraction planning is constrained to existing captured evidence:

- Use existing captured evidence only.
- Do not read additional Figma nodes.
- Do not extract Figma variables.
- Do not write raw values to semantic tokens.

Current source references:

- `figma-node-143-23952`
- `screenshot-summary-dashboard-143-23952`
- `registry/source-map.json`
- `figma/node-map.json`
- `figma/component-map.json`

## Planned Typography Roles

### typography.metric

Planned tokens:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.metric.caption`

All four are primary planning targets because source evidence strongly supports metric value, unit, label, and supporting hierarchy in the Activity and MetricCard evidence.

### typography.record

Planned tokens:

- `typography.record.title`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`

`typography.record.title` and `typography.record.metadata` are primary planning targets because source evidence strongly supports workout row title and metadata hierarchy.

`typography.record.label` and `typography.record.unavailable` are secondary / cautious planning targets. They should be rejected later if a distinct source-backed role cannot be confirmed.

## Allowed Fields for Future Extraction

Future planning may allow these typography fields to be read later:

- `fontFamily`
- `fontStyle`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `letterSpacing`
- `textCase`
- `textDecoration`

These fields must not be read or written in this cycle.

## Disallowed Fields

Future typography extraction must not include:

- color, fill, stroke, background, or opacity
- spacing, padding, margin, or gap
- radius
- shadow, blur, gradient, or effects
- layout geometry, component position, or source screen dimensions
- icon assets or award imagery
- direct writes to `tokens/semantic.tokens.json`
- CSS integration

## Future Write Policy

Future raw values must first land in a review matrix, not `tokens/semantic.tokens.json`.

Planned future target:

```text
registry/typography-raw-value-review-matrix.json
```

`tokens/semantic.tokens.json` must remain pending until a later acceptance review explicitly approves semantic token updates.

## Acceptance Criteria

A future extracted typography value can enter the review matrix only when:

- The source role matches the planned semantic token.
- The value comes from existing captured Summary Dashboard evidence.
- The value is recorded in a review matrix first.
- The value is reviewed as role-level evidence, not source-specific polish.
- The future extraction does not accept the token, promote the token, or connect it to CSS.

## Rejection Criteria

Reject a future extraction when:

- The source text role cannot be matched to the planned semantic token.
- The value requires reading additional Figma nodes outside captured evidence.
- The value comes from local runtime CSS or Storybook implementation.
- The value is Apple/platform-specific polish rather than transferable typography evidence.
- The value would be written directly to `tokens/semantic.tokens.json`.
- The value belongs to a blocked token group.

## Raw Value Decision

No raw values were extracted.

No real `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, or `letterSpacing` values were written.

No Figma variables were read.

## Promotion Impact

No token is accepted.

No token, component, or pattern is promoted.

This plan only narrows the next possible raw-value work to `typography.metric` and `typography.record`.

## Next Cycle Recommendation

Create `registry/typography-raw-value-review-matrix.json` in a future cycle and populate it only if a constrained source read is explicitly approved.

That future cycle should still keep semantic token values pending until a separate acceptance review.
