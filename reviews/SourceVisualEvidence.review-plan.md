# Source Visual Evidence Review Plan

## Review Scope

This nineteenth-cycle plan defines how to review source-backed visual evidence for semantic token candidates.

In scope:

- Prioritizing token groups for future source visual review.
- Naming the source evidence questions that should be answered before raw-value extraction.
- Marking current runtime CSS assumptions as not source-reviewed.
- Keeping all token, component, and pattern candidates not promoted.

Out of scope:

- Reading more Figma nodes.
- Taking new Figma screenshots.
- Extracting Figma variables.
- Extracting raw token values.
- Writing real hex, RGB, HSL, font, spacing, or radius values.
- Connecting tokens to CSS.
- Editing SummaryDashboard UI or component implementation.
- Adding Storybook stories.
- Promotion.

## Current Token Evidence State

Semantic token candidates are now runtime-evidence-mapped.

Current state:

- Token names are mapped to runtime roles in `tokens/semantic.tokens.json`.
- Token group evidence is recorded in `registry/style-token-evidence-matrix.json`.
- Raw values remain pending.
- CSS remains local runtime styling.
- No token is accepted or promoted.

## Source Evidence Boundary

This plan uses only already captured evidence:

- `figma-node-143-23952`
- `screenshot-summary-dashboard-143-23952`
- component and node mappings under `figma/`
- runtime reviews and Storybook evidence already in the repository

This cycle does not read more Figma nodes and does not extract variables or raw style values.

## Priority Token Groups

### High Priority

- `color.progress`
- `color.trend`
- `color.reward`
- `typography.metric`
- `typography.record`
- `spacing.summary`
- `density.dashboard`
- `state.unavailable`

Reason:

These groups carry the most meaning for the current SummaryDashboard semantic loop. They define goal progress, trend interpretation, reward evidence, scannable metric and record hierarchy, dashboard rhythm, and truthful missing-data states.

### Medium Priority

- `color.metric`
- `color.surface`
- `typography.trend`
- `typography.reward`
- `spacing.component`
- `state.interactive`

Reason:

These groups are important, but they either support higher-priority groups or depend on states that are still partly synthetic. They should be reviewed after the primary semantic and density roles are framed.

### Deferred

- `radius.policy`

Reason:

Radius is visible in runtime styling, but the project should not inherit source radius automatically. It should wait until color, typography, spacing, density, and state evidence are reviewed.

## Runtime CSS Assumptions

The following runtime CSS assumptions are not source-reviewed:

- Progress state colors in `ProgressRing`.
- Trend direction colors in `TrendCard`.
- Reward status colors and placeholder symbol treatment in `AwardBadge`.
- Metric value, label, caption, error, completed, and overachieved colors.
- Dashboard, card, module, and unavailable-state surfaces.
- Typography sizes, weights, line heights, and hierarchy.
- SummaryDashboard spacing, module gaps, and component padding.
- Dashboard compact versus composed density.
- Radius values for cards, modules, controls, and round indicators.
- Focus, border, and action affordance treatment for interactive targets.

These assumptions may be useful runtime scaffolding, but they must not be treated as source token evidence.

## Source Review Questions

- Which visual decisions in the captured source carry product meaning rather than brand-specific polish?
- Which progress, trend, and reward color roles are meaning-bearing?
- Which unavailable, missing, empty, and insufficient-data states are source-backed?
- Which typography roles are essential for scanning metric, record, trend, and reward information?
- Which SummaryDashboard spacing and density decisions preserve the concept loop without requiring full app-shell scope?
- Which interactive treatments are source-backed versus web adaptation behavior?
- Which visual roles should remain local runtime styling rather than becoming tokens?

## What Should Not Be Extracted Yet

Do not extract:

- Real color values.
- Font family, size, weight, or line-height values.
- Spacing values.
- Radius values.
- Shadows, blur, gradients, or decorative effects.
- App-shell navigation styling.
- Full Trends or Awards page styling.
- Apple-specific icon, award, or platform assets.

## Promotion Impact

Do not promote.

This plan only prioritizes source visual evidence review. It does not execute the review, extract raw values, accept token candidates, update CSS, or promote any component or pattern.

## Next Cycle Recommendation

Next cycle should perform a constrained source visual evidence review using only existing captured source evidence.

Recommended order:

1. Review high-priority token groups against the captured screenshot and existing node mappings.
2. Record observed versus inferred source visual roles.
3. Keep raw values pending.
4. Decide whether a later Figma variable read is justified for a smaller set of source-backed roles.
