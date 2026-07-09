# SummaryDashboard Source Visual Alignment Plan

## Review Scope

This forty-fifth cycle plans the SummaryDashboard-level source visual alignment pass.

It does not execute alignment and does not change CSS, TSX, Storybook stories, semantic token values, Figma maps, source assets, or promotion state.

## Source Evidence Used

- `assets/source-evidence/summary-dashboard-143-23952.png`
- `registry/source-map.json`
- `figma/node-map.json`
- `registry/metric-typography-visual-qa-review.json`

No additional Figma nodes were read.

No runtime screenshots were generated.

## Why This Plan Exists

Metric typography visual QA concluded that unit and label pressure is acceptable enough to continue, but evidence remains limited.

The next useful move is not another metric-only CSS adjustment. The next useful move is a SummaryDashboard-level visual baseline so metric typography can be judged inside page density, section rhythm, and optional module composition.

## Alignment Targets

- SummaryDashboard page density
- Activity metric card hierarchy
- Workouts optional module rhythm
- Trend and Award optional semantic module placement
- BottomNav deferred app shell boundary

## Planned Boundary

The next execution cycle should capture local runtime screenshots for:

- MetricCard default / long localized label / extreme value surfaces
- SummaryDashboard semantic composition surface
- SummaryDashboard optional module surfaces if available from existing stories

The capture should compare existing runtime surfaces against captured source evidence. It should not write CSS.

## BottomNav Decision

BottomNav remains deferred.

It is visible in the source evidence as app shell, but it is not part of the current SummaryDashboard transferable pattern and should not be introduced during this alignment plan.

## Blocked Scope

Blocked until after runtime visual baseline capture:

- CSS execution
- TSX changes
- Storybook changes
- semantic token value changes
- promotion review

## Promotion Impact

No token, component, pattern, SummaryDashboard surface, or style-system asset changes promotion state.

## Next Cycle Recommendation

Run SummaryDashboard Runtime Visual Baseline Capture.

The next cycle should create local runtime screenshot evidence before any further visual alignment execution.

