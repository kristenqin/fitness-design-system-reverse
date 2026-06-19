# WorkoutItem Contract

## Source Evidence

This contract uses only existing captured evidence from the SummaryDashboard reverse workflow.

Source references:

- Source map id: `figma-node-143-23952`
- Screenshot evidence id: `screenshot-summary-dashboard-143-23952`
- SummaryDashboard screen: `143:25101`
- Workouts section: `143:25131`
- Workout row source nodes: `143:25136` and `143:25151`, both named `Card`
- Component map entry: `component-workout-item-summary-dashboard`
- Boundary matrix entries for `143:25136` and `143:25151`

Observed source facts:

- The Workouts section contains a heading `Workouts`.
- The Workouts section contains a `Show More` text action.
- The Workouts section contains two repeated `Card` frames.
- Each visible workout card contains the text `Traditional Strength Training`.
- Each visible workout card contains duration value `0:02`.
- Each visible workout card contains date text `8/9/22`.

No additional Figma nodes were read for this contract.

## Contract Purpose

`WorkoutItem` represents one completed behavior record in a list, dashboard preview, or history surface.

This contract exists to separate completed-record semantics from compact metric display semantics before any runtime implementation begins.

## Boundary Principle

- `MetricCard` is responsible for compact metric display.
- `WorkoutItem` is responsible for completed behavior records.
- A workout row can contain metric values, but the row's primary object is a completed workout record.
- `MetricCard` can become an internal substructure of `WorkoutItem` later, but it cannot replace `WorkoutItem`.
- Ownership follows primary meaning, not the presence of numeric text.

## Primary Object

Primary object: `Record`

Domain-specific source object: completed workout record.

Transferable object: completed behavior record.

## Information Anatomy

### Observed Slots

Observed slots are limited to values already present in captured evidence:

- `title`: observed as `Traditional Strength Training`
- `duration`: observed as `0:02`
- `date`: observed as `8/9/22`

### Inferred Slots

Inferred slots are plausible from the row's role but are not confirmed as reusable system slots yet:

- `activityType`: inferred from the workout title
- `recordId`: inferred because records normally need stable identity
- `detailTarget`: inferred from list-row behavior and nearby `Show More`, but not confirmed for the row itself
- `metadata`: inferred wrapper for duration and date

### Future Candidate Slots

Future candidate slots require additional evidence or runtime validation before becoming part of a stable contract:

- `thumbnail`
- `route`
- `distance`
- `energy`
- `pace`
- `status`
- `syncState`
- `sourceDevice`
- `accessoryMetrics`

## Input Contract Draft

Draft only. Do not implement yet.

```ts
type WorkoutItemData = {
  id: string;
  title: string;
  duration: string;
  date: string;
  activityType?: string;
  detailTarget?: string;
  metrics?: Array<{
    label: string;
    value: string;
    unit?: string;
  }>;
  status?: "default" | "missing-metadata" | "syncing" | "error";
};
```

Observed required fields for the first runtime pass:

- `title`
- `duration`
- `date`

All other fields are inferred or future candidates.

## State Plan

Initial runtime states to validate next cycle:

- `Default`: title, duration, and date are present.
- `LongTitle`: long workout title pressure.
- `MissingDuration`: title and date are present, duration is unavailable.
- `MissingDate`: title and duration are present, date is unavailable.
- `InteractiveTarget`: row behaves as a detail target.

Later states, not for the next cycle unless new evidence supports them:

- `Syncing`
- `Error`
- `WithRoute`
- `WithMetrics`
- `DeletedOrUnavailable`

## Accessibility Draft

- Non-interactive records should use a semantic record container such as `article`.
- Interactive records should use a native interactive element or a clearly labeled link/button target.
- The accessible name should include the workout title and enough metadata to distinguish the record.
- Duration and date should remain available as text, not visual-only decoration.
- Missing metadata should be announced as unavailable rather than silently omitted.
- If future metric substructure is added, it should not obscure the row's completed-record semantics.

## Relationship with MetricCard

`MetricCard` may display compact metric facts. `WorkoutItem` represents the completed record that may contain those facts.

In this evidence set:

- Activity `Stats` belong to `MetricCard`.
- Workouts `Card` rows belong to `WorkoutItem`.

Future `WorkoutItem` implementation may use a lighter metric subpart or a `MetricCard`-like internal structure, but the public component boundary remains `WorkoutItem`.

## Not in Scope

- Implementing `WorkoutItem.tsx`
- Creating `WorkoutItem.stories.tsx`
- Connecting `WorkoutItem` into `SummaryDashboard`
- Rebuilding the Workouts section
- Reading more Figma nodes
- Extracting token values
- Promoting `WorkoutItem`
- Expanding into `TrendCard` or `AwardBadge`

## Open Questions

- Is each workout row always interactive?
- Does a workout row require an icon, thumbnail, or activity symbol?
- Are duration and date always present?
- Should metric values inside a workout row use plain text, a lightweight metric subpart, or `MetricCard` internally?
- What states exist for incomplete, syncing, deleted, or unavailable records?
- Does SummaryDashboard pattern promotion require WorkoutItem runtime validation first?

## Promotion Constraints

`WorkoutItem` cannot be promoted until:

- Its contract is reviewed against source evidence.
- Runtime stories validate default and edge states.
- Accessibility behavior is tested beyond this draft.
- The relationship with internal metric values is validated.
- It can be explained without source-specific branding.
- `sourceStatus: captured` is not treated as `reviewed`.
