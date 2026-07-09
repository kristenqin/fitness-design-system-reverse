# Metric Typography Normalization Plan

## Review Scope

This thirty-eighth cycle plans metric typography normalization after typography CSS visual QA returned warning-level results.

This is a planning cycle only. It does not change CSS, TSX, Storybook stories, semantic token values, or promotion status.

## Source Evidence Reviewed

- `registry/typography-css-visual-qa-execution.json`
- `reviews/TypographyCSS.visual-qa-execution.md`
- `registry/typography-css-runtime-validation-matrix.json`
- `registry/style-token-evidence-matrix.json`
- `registry/promotion-candidates.json`
- `specs/visual-language.md`

## Problem

Metric typography is connected in the constrained runtime surface and remains usable as candidate evidence, but visual QA recorded warnings.

The main risks are:

- metric unit and label use absolute source typography and need normalization review
- metric typography may overfit the captured dashboard emphasis
- long localized labels and extreme values may compress the MetricCard layout
- SummaryDashboard density may shift when metric value, unit, and label are all connected

## Normalization Targets

### typography.metric.value

`typography.metric.value` remains the hierarchy anchor for compact metric display.

Planned review:

- preserve dominant metric value hierarchy
- compare extreme values against card density
- verify SummaryDashboard does not become metric-heavy at the expense of progress and optional modules

No CSS or token value change is allowed in this cycle.

### typography.metric.unit

`typography.metric.unit` needs ratio and primitive-sharing review.

Planned review:

- check unit scale against metric value
- consider whether unit and label can share primitive characteristics
- keep unit as a separate semantic role even if primitives converge later

No CSS or token value change is allowed in this cycle.

### typography.metric.label

`typography.metric.label` needs density and localization review.

Planned review:

- check long Chinese labels and other localized labels
- confirm label does not collapse into caption semantics
- compare label behavior in MetricCard and SummaryDashboard

No CSS or token value change is allowed in this cycle.

## Reference-only Tokens

`typography.record.title` is reference-only for this plan. It passed visual QA with notes and can be used as a hierarchy comparison point, but it is not a metric normalization target.

## Blocked Tokens

- `typography.metric.caption`: remains blocked because it was not found or not eligible in the raw-value acceptance review.
- `typography.record.duration`: remains selector-blocked and needs a separate selector strategy.
- `typography.record.date`: remains selector-blocked and needs a separate selector strategy.

## Planned Evidence Before Any CSS Adjustment

- MetricCard Default, LongChineseText, and ExtremeValue review
- SummaryDashboard Default and FullSemanticLoop density review
- Style System/Typography/MetricRoles role separation review

## What This Cycle Does Not Do

- does not modify CSS
- does not modify TSX
- does not modify Storybook
- does not modify semantic token values
- does not promote tokens, components, patterns, or the style system

## Promotion Impact

Promotion remains blocked.

Metric typography normalization is now planned, but no token or style-system asset changes promotion state.

## Next Cycle Recommendation

Run a narrow follow-up cycle to decide whether metric normalization should remain a plan or become a scoped CSS normalization execution.

That follow-up must explicitly allow CSS before any runtime style change.

