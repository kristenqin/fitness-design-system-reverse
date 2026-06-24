# TrendCard Runtime Plan

## Purpose

Plan the next runtime validation step for `TrendCard` without implementing it in this cycle.

The next cycle should validate `TrendCard` as a component-level reverse surface for trend direction and interpretation over time. It should not validate a full Trends section and should not connect TrendCard into SummaryDashboard yet.

## Runtime Scope

Next cycle should cover only:

- `TrendCard` as a local reverse component candidate
- Synthetic runtime validation data
- Component-level Storybook stories
- Accessibility and content-pressure checks
- Boundary validation against `MetricCard`

Out of scope for the next cycle:

- SummaryDashboard integration
- Full Trends section
- AwardBadge
- BottomNav
- Token extraction
- Pixel-perfect source matching
- Promotion

## Stories to Create Next Cycle

Recommended Storybook stories:

- `Components/TrendCard/Default`
- `Components/TrendCard/Improving`
- `Components/TrendCard/Declining`
- `Components/TrendCard/Neutral`
- `Components/TrendCard/InsufficientData`
- `Components/TrendCard/LongExplanation`

## Synthetic Data Required

Synthetic data must be clearly labeled as runtime validation data and must not be presented as Apple Fitness or Figma source data.

Minimum data fixtures:

- `defaultTrendCardData`: title, direction, explanation, optional action label
- `improvingTrendCardData`: improving direction with interpretation text
- `decliningTrendCardData`: declining direction with interpretation text
- `neutralTrendCardData`: stable or neutral direction with interpretation text
- `insufficientDataTrendCardData`: insufficient data explanation without implying failure
- `longExplanationTrendCardData`: long localized or explanatory copy pressure

Optional later fixtures:

- unavailable trend data
- permission denied trend data
- loading trend data
- trend with supporting value
- interactive trend target

## Accessibility Checks

Validate:

- Non-interactive trend surfaces use an article-like semantic structure.
- Interactive trend targets use native button or link semantics.
- Direction is available in text, not only color or iconography.
- Insufficient data is announced as insufficient data, not as decline or error.
- Long explanation text remains readable and does not hide the trend meaning.
- Supporting metric values do not replace the trend interpretation as the accessible name.

Do not claim accessibility review is complete until automated checks or assistive technology review exist.

## Relationship with SummaryDashboard

`TrendCard` is captured in SummaryDashboard evidence and is the next semantic module, but the next cycle should validate it independently first.

Do not connect `TrendCard` into SummaryDashboard until:

- the component contract is stable enough for a local runtime pass,
- direction and insufficient-data states are visible in Storybook,
- accessibility behavior is drafted from runtime evidence,
- and SummaryDashboard composition rules can be revisited without expanding into Awards or app shell scope.

## Do Not Do

- Do not implement `TrendCard` in this cycle.
- Do not create `TrendCard.stories.tsx` in this cycle.
- Do not connect TrendCard into SummaryDashboard in the next runtime cycle.
- Do not build the full Trends section.
- Do not implement charts, sparklines, arrows, or source-specific illustration.
- Do not implement AwardBadge.
- Do not implement BottomNav.
- Do not extract tokens.
- Do not read additional Figma nodes.
- Do not promote TrendCard.

## Success Criteria

The next runtime cycle succeeds when:

- `TrendCard` has a local reverse component surface under `src/reverse-components/summary-dashboard/`.
- The six recommended component stories build successfully.
- Synthetic fixtures are clearly marked as synthetic runtime validation data.
- Direction, insufficient-data, and long-explanation states are visible.
- Metric values remain subordinate to trend interpretation.
- Accessibility gaps are documented without claiming promotion.
- `promotionStatus` remains `not-promoted`.

## Next Cycle Recommendation

Run a twelfth cycle focused only on `TrendCard` component-level runtime validation.

Do not connect TrendCard into SummaryDashboard yet. Keep AwardBadge deferred and BottomNav paused as source app shell.
