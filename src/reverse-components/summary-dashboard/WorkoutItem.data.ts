export type WorkoutItemStatus = "default" | "missing-duration" | "missing-date" | "interactive" | "unavailable";

export type WorkoutItemData = {
  id: string;
  title: string;
  duration?: string | null;
  date?: string | null;
  status: WorkoutItemStatus;
  isInteractive?: boolean;
  actionLabel?: string;
};

// Synthetic runtime validation data. This is not source data from Apple Fitness or Figma.
export const defaultWorkoutItemData: WorkoutItemData = {
  id: "synthetic-workout-default",
  title: "Traditional Strength Training",
  duration: "0:24",
  date: "Runtime day",
  status: "default"
};

export const longTitleWorkoutItemData: WorkoutItemData = {
  id: "synthetic-workout-long-title",
  title: "Lower body strength session with extended cooldown and mobility preparation",
  duration: "42:18",
  date: "Runtime day",
  status: "default"
};

export const missingDurationWorkoutItemData: WorkoutItemData = {
  id: "synthetic-workout-missing-duration",
  title: "Outdoor Walk",
  duration: null,
  date: "Runtime day",
  status: "missing-duration"
};

export const missingDateWorkoutItemData: WorkoutItemData = {
  id: "synthetic-workout-missing-date",
  title: "Core Training",
  duration: "18:07",
  date: null,
  status: "missing-date"
};

export const interactiveWorkoutItemData: WorkoutItemData = {
  id: "synthetic-workout-interactive",
  title: "Cycling Session",
  duration: "31:45",
  date: "Runtime day",
  status: "interactive",
  isInteractive: true,
  actionLabel: "Open synthetic cycling session record"
};

export const unavailableWorkoutItemData: WorkoutItemData = {
  id: "synthetic-workout-unavailable",
  title: "Workout record unavailable",
  duration: null,
  date: null,
  status: "unavailable"
};
