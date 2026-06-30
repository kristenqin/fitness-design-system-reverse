# Medium-priority Source Visual Evidence Review

## Review Scope

This twenty-first-cycle review executes the medium-priority source visual evidence pass for semantic token candidates.

Reviewed groups:

- `color.metric`
- `color.surface`
- `typography.trend`
- `typography.reward`
- `spacing.component`
- `state.interactive`

This review uses existing captured evidence only. It does not re-review high-priority groups except to reference their twentieth-cycle conclusions. It does not review `radius.policy`, which remains deferred.

No raw values were extracted. No token was accepted. No CSS was changed. No component or pattern was promoted.

## Source Evidence Used

- `figma-node-143-23952`
- `screenshot-summary-dashboard-143-23952`
- `registry/source-map.json`
- `figma/node-map.json`
- `figma/component-map.json`
- Existing runtime review and token evidence files from cycles 17-20

The captured source evidence supports visible module surfaces, compact metric text, Trend and Awards section content, repeated card-like component surfaces, and visible actions such as Show More and Get Started. It does not provide raw token values, Figma variables, source style IDs, focus states, contrast results, or complete state coverage.

## Medium Priority Groups Reviewed

### color.metric

Source evidence strength: `partial`

The source shows metric value, label, and supporting text color hierarchy in Activity and workout-related metric contexts. It does not confirm error, completed, overachieved, or interactive metric color states.

Candidate decision: keep `color.metric` as a semantic candidate. Treat value, label, and caption roles as source-backed in role only; keep state-specific metric colors as runtime-only candidates.

### color.surface

Source evidence strength: `partial`

The source shows dashboard canvas, section cards, workout rows, Trend box, and Awards module surfaces. It supports the existence of surface hierarchy, but not raw surface values or transferable surface policy.

Candidate decision: keep `color.surface` as a semantic candidate. Do not accept local runtime dark styling as source token evidence.

### typography.trend

Source evidence strength: `partial`

The source shows Trends section heading, explanatory copy, and Get Started action. This supports trend title, explanation, and action text roles, but not synthetic direction labels or full trend metadata.

Candidate decision: keep `typography.trend` candidates. Direction and metadata roles remain runtime-only until source trend states are observed or reviewed.

### typography.reward

Source evidence strength: `partial`

The source shows award item title and progress-like supporting text inside the Awards section. It supports reward title and progress evidence roles, but not the synthetic status taxonomy.

Candidate decision: keep `typography.reward` candidates. Status and description roles remain runtime-only until source reward states are reviewed.

### spacing.component

Source evidence strength: `partial`

The source shows internal spacing inside Activity, workout rows, Trends Box, and Awards items. This supports component spacing as a role, but not numeric padding, gaps, or reusable spacing scale.

Candidate decision: keep `spacing.component` candidates. Do not merge component spacing into `spacing.summary`, and do not extract values.

### state.interactive

Source evidence strength: `weak`

The source shows action affordances such as Show More, Get Started, Back, and share/navigation controls. It does not show web focus state, keyboard target treatment, or the synthetic interactive component states used in runtime validation.

Candidate decision: keep `state.interactive` candidates for runtime accessibility planning only. Do not treat focus rings, interactive borders, or button surfaces as source visual evidence.

## Relationship to High-priority Findings

The twentieth-cycle high-priority review remains unchanged:

- `typography.metric` and `typography.record` have stronger source-backed semantic hierarchy than the medium typography groups.
- `color.progress`, `color.trend`, and `color.reward` remain partial because state colors are not source-reviewed.
- `state.unavailable` remains weak and should not be merged into `color.surface` or `state.interactive`.
- `spacing.summary` and `density.dashboard` remain partial and pattern-level; component spacing should remain a separate candidate group.

## Runtime CSS Assumptions Rejected as Source Evidence

- Metric error, completed, overachieved, and interactive colors from local runtime CSS.
- Dashboard canvas, card, module, and unavailable surfaces from local runtime CSS.
- Trend direction typography and synthetic long-explanation styling.
- Reward status typography and placeholder AwardBadge visual treatment.
- Component padding, internal gaps, inline gaps, and compact gaps from local runtime CSS.
- Focus rings, focus borders, hover states, and native button adaptation.
- Any radius value or card rounding policy; `radius.policy` remains deferred.

## Token Candidate Decisions

Kept:

- All reviewed medium-priority semantic token groups remain candidates.
- `color.metric` remains separate from `color.progress`.
- `color.surface` remains separate from `state.unavailable`.
- `typography.trend` and `typography.reward` remain separate from generic card typography.
- `spacing.component` remains separate from `spacing.summary`.
- `state.interactive` remains a candidate accessibility/runtime group.

Split:

- No token file split was performed.
- The review separates source-backed visible roles from runtime-only state and web adaptation assumptions.

Merged:

- No candidates were merged.

Deferred:

- All raw values.
- Metric state colors beyond source-observed value hierarchy.
- Trend direction typography and source metadata.
- Reward status typography and real award-state typography.
- Component spacing scale and breakpoint behavior.
- Interactive focus and target treatment.
- `radius.policy`.

## What Worked

- Existing captured source evidence is enough to keep medium-priority roles as candidates.
- The medium review clarifies which roles are source-visible versus runtime-only.
- The surface and spacing groups can remain semantic without turning local CSS into token evidence.

## What Broke

- Most medium-priority state details remain synthetic runtime validation.
- Interactive treatment is especially weak because source evidence does not cover keyboard focus or web target behavior.
- Typography roles for Trend and Reward are visible but incomplete.
- Source evidence still cannot support raw values or contrast decisions.

## Raw Value Decision

No raw values were extracted.

No real hex, font, spacing, radius, or Figma variable values were added.

All reviewed token values remain pending placeholders.

## Promotion Impact

No token is accepted.

No token, component, or pattern is promoted.

The style token system candidate can move from high-priority reviewed draft to high-and-medium-priority reviewed draft, but remains blocked by deferred radius policy, missing raw values, weak state evidence, no contrast review, local runtime CSS, and no migration validation.

## Next Cycle Recommendation

Keep `radius.policy` deferred until the team decides whether radius is a transferable system policy or a local implementation policy.

Recommended next step: run an accessibility contrast and state-evidence planning cycle before raw token extraction. Raw values should still wait until source-reviewed roles are stable enough to justify variable reads.
