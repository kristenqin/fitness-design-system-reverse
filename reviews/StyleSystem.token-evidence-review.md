# Style System Token Evidence Review

## Review Scope

This eighteenth-cycle review establishes the first semantic token evidence mapping after SummaryDashboard optional semantic runtime composition.

In scope:

- Semantic token candidate names
- Runtime evidence references
- Token group mapping for color, typography, spacing, density, radius, unavailable state, and interactive state
- Promotion blockers for the style system

Out of scope:

- Raw Figma token extraction
- Figma variable reads
- CSS token integration
- Runtime CSS edits
- New Storybook stories
- Component or pattern promotion
- Migration experiments

## Current Semantic Runtime Base

The current runtime base includes:

- `ProgressRing` as Goal / Progress evidence.
- `MetricCard` as metric context evidence.
- `WorkoutItem` as Behavior / Record evidence.
- `TrendCard` as Trend / Insight evidence.
- `AwardBadge` as Reward / Achievement evidence.
- `SummaryDashboard` semantic composition stories covering core-only, optional trend, optional reward, full semantic loop, and missing optional module data.

This gives enough stable runtime roles to name semantic token candidates. It does not provide source-reviewed raw values.

## Token Evidence Method

Token names are mapped from semantic runtime roles, not from copied visual values.

Method:

1. Use component and pattern runtime states as evidence for token groups.
2. Name tokens by product meaning and UI role.
3. Keep all raw values as pending placeholders.
4. Add evidence references to Storybook paths, component candidates, and captured source references.
5. Keep all token groups `not-promoted`.

## Candidate Token Groups

### Color Tokens

Mapped groups:

- `color.progress`
- `color.metric`
- `color.trend`
- `color.reward`
- `color.surface`

Runtime evidence now supports semantic color names for progress status, metric state, trend direction, reward status, and dashboard/card surfaces. Raw color values remain pending and are not validated against Figma variables.

### Typography Tokens

Mapped groups:

- `typography.metric`
- `typography.record`
- `typography.trend`
- `typography.reward`

Runtime evidence now supports typography roles for metric values, completed record metadata, trend explanation, and reward status. These are role names only; source font values and scale decisions remain pending.

### Spacing Tokens

Mapped groups:

- `spacing.summary`
- `spacing.component`

Runtime evidence now exposes spacing roles for SummaryDashboard shell rhythm, optional module gaps, and component interior spacing. The actual spacing values remain local runtime CSS, not tokenized system values.

### Density Tokens

Mapped group:

- `density.dashboard`

Runtime evidence now distinguishes compact required core density from composed optional semantic module density. Density is still a candidate policy, not a promoted rule.

### Radius Policy

Mapped group:

- `radius.policy`

Runtime evidence identifies card, module, control, and round-indicator radius roles. No source-reviewed radius policy exists yet, and no token is accepted.

### State Tokens

Mapped groups:

- `state.unavailable`
- `state.interactive`

Runtime evidence now covers missing trend data, missing award data, unavailable progress, missing record metadata, and interactive targets. These state roles still need accessibility review, contrast review, and source validation.

## What Worked

- Semantic token candidates can now map to stable runtime roles across the concept loop.
- `FullSemanticLoop` gives enough pattern-level context to connect component tokens to dashboard composition.
- Missing and unavailable states now have their own candidate token group instead of being folded into generic muted styling.
- Reward and trend colors can be named by meaning without using real award assets or chart visuals.

## What Broke

- Current CSS still contains local runtime styling and is not token-driven.
- Raw values are not extracted, reviewed, or source-backed.
- Contrast behavior is unknown.
- Density and radius are visible in runtime but not confirmed as transferable system policy.
- Token transferability has not been tested through migration experiments.

## Source Evidence Limits

- Figma evidence is captured, not reviewed.
- No additional Figma nodes were read in this cycle.
- No Figma variables or styles were extracted.
- Existing source evidence supports component and pattern roles, not raw token values.
- `captured` evidence does not make any token accepted.

## Promotion Impact

Do not promote.

Semantic token candidates can now be mapped to runtime evidence, but every raw value remains pending. No token, component, pattern, or style-system group is promoted by this review.

## Next Cycle Recommendation

Recommended next cycle: source-backed style evidence planning.

Before extracting raw values, define which source-backed visual decisions are worth confirming first:

- color roles and contrast expectations,
- typography scale and localized text pressure,
- SummaryDashboard spacing and density,
- radius policy,
- unavailable and interactive state treatment.

Only after that should Figma variables or style values be read and compared against the semantic token candidates.
