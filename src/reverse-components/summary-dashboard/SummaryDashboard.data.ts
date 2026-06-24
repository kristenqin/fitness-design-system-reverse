import {
  defaultWorkoutItemData,
  interactiveWorkoutItemData,
  type WorkoutItemData
} from "./WorkoutItem.data";

export type ProgressStatus = "empty" | "low" | "pending" | "completed" | "overachieved" | "unavailable";
export type MetricStatus = ProgressStatus | "loading" | "error";

export type ProgressRingData = {
  label: string;
  value: number;
  goal: number;
  unit: string;
  status: ProgressStatus;
  caption: string;
  ariaLabel?: string;
};

export type MetricCardData = {
  title: string;
  value: string;
  unit?: string;
  caption: string;
  status?: MetricStatus;
  isInteractive?: boolean;
  actionLabel?: string;
};

export type SummaryDashboardData = {
  eyebrow: string;
  title: string;
  progress: ProgressRingData;
  metrics: MetricCardData[];
  workouts?: {
    title: string;
    items: WorkoutItemData[];
    unavailableMessage: string;
  };
  insight: {
    title: string;
    body: string;
  };
};

// Synthetic runtime validation data. This is not source data from Apple Fitness or Figma.
export const defaultSummaryDashboardData: SummaryDashboardData = {
  eyebrow: "Evidence cycle",
  title: "Daily summary",
  progress: {
    label: "Move",
    value: 124,
    goal: 300,
    unit: "CAL",
    status: "pending",
    caption: "Goal-relative activity progress"
  },
  metrics: [
    {
      title: "Steps",
      value: "1,736",
      caption: "Behavior record count"
    },
    {
      title: "Distance",
      value: "1.22",
      unit: "KM",
      caption: "Supporting activity metric"
    }
  ],
  insight: {
    title: "Trend signal",
    body: "Synthetic copy used to test whether a compact dashboard can explain direction without requiring a full trend component."
  }
};

export const lowProgressSummaryDashboardData: SummaryDashboardData = {
  ...defaultSummaryDashboardData,
  progress: {
    label: "Move",
    value: 24,
    goal: 300,
    unit: "CAL",
    status: "low",
    caption: "Low progress state"
  },
  metrics: [
    {
      title: "Steps",
      value: "991",
      caption: "Low activity pressure"
    },
    {
      title: "Distance",
      value: "0.69",
      unit: "KM",
      caption: "Below usual range"
    }
  ],
  insight: {
    title: "Needs attention",
    body: "Synthetic low-progress state used to test hierarchy, urgency, and copy density."
  }
};

export const completedProgressRingData: ProgressRingData = {
  label: "Move",
  value: 300,
  goal: 300,
  unit: "CAL",
  status: "completed",
  caption: "Goal completed"
};

export const emptyProgressRingData: ProgressRingData = {
  label: "Move",
  value: 0,
  goal: 300,
  unit: "CAL",
  status: "empty",
  caption: "Synthetic empty state for no recorded progress",
  ariaLabel: "Move progress has no recorded value toward a synthetic 300 CAL goal"
};

export const overachievedProgressRingData: ProgressRingData = {
  label: "Move",
  value: 386,
  goal: 300,
  unit: "CAL",
  status: "overachieved",
  caption: "Synthetic overachieved state",
  ariaLabel: "Move progress is 386 of 300 CAL, over the synthetic goal"
};

export const unavailableProgressRingData: ProgressRingData = {
  label: "Move",
  value: 0,
  goal: 300,
  unit: "CAL",
  status: "unavailable",
  caption: "Synthetic unavailable state for permission or source gaps",
  ariaLabel: "Move progress is unavailable in synthetic runtime validation"
};

export const longChineseMetricData: MetricCardData = {
  title: "连续完成训练目标的平均活动分钟数",
  value: "128",
  unit: "分钟",
  caption: "用于验证中文长标题与单位在紧凑卡片里的换行压力",
  status: "pending"
};

export const extremeMetricData: MetricCardData = {
  title: "Total output",
  value: "987,654,321",
  unit: "PTS",
  caption: "Synthetic extreme value for overflow validation",
  status: "completed"
};

export const loadingMetricData: MetricCardData = {
  title: "Steps",
  value: "Loading",
  caption: "Synthetic loading state for pending metric data",
  status: "loading"
};

export const emptyMetricData: MetricCardData = {
  title: "Distance",
  value: "0",
  unit: "KM",
  caption: "Synthetic empty state for no recorded metric value",
  status: "empty"
};

export const errorMetricData: MetricCardData = {
  title: "Energy",
  value: "Error",
  caption: "Synthetic error state for unavailable metric calculation",
  status: "error"
};

export const goalCompletedMetricData: MetricCardData = {
  title: "Move goal",
  value: "300",
  unit: "CAL",
  caption: "Synthetic goal-completed state",
  status: "completed"
};

export const overachievedMetricData: MetricCardData = {
  title: "Move goal",
  value: "386",
  unit: "CAL",
  caption: "Synthetic overachieved metric state",
  status: "overachieved"
};

export const interactiveMetricData: MetricCardData = {
  title: "Steps detail",
  value: "1,736",
  caption: "Synthetic interactive target for keyboard and focus validation",
  status: "pending",
  isInteractive: true,
  actionLabel: "Open synthetic steps detail"
};

// Synthetic optional-module validation data. This is not source data from Apple Fitness or Figma.
export const summaryDashboardWithWorkoutItemsData: SummaryDashboardData = {
  ...defaultSummaryDashboardData,
  workouts: {
    title: "Workouts",
    unavailableMessage: "Synthetic workout records unavailable",
    items: [defaultWorkoutItemData, interactiveWorkoutItemData]
  },
  insight: {
    title: "Optional module active",
    body: "Synthetic copy used to validate that completed workout records can compose into the dashboard without changing MetricCard semantics."
  }
};

export const summaryDashboardWithoutWorkoutItemsData: SummaryDashboardData = {
  ...defaultSummaryDashboardData,
  insight: {
    title: "No workouts module",
    body: "Synthetic copy used to validate that the dashboard runs when the optional workouts module is omitted."
  }
};

export const summaryDashboardWithMissingWorkoutData: SummaryDashboardData = {
  ...defaultSummaryDashboardData,
  workouts: {
    title: "Workouts",
    unavailableMessage: "Workout records are unavailable in this synthetic state.",
    items: []
  },
  insight: {
    title: "Missing workout data",
    body: "Synthetic copy used to validate empty optional module handling without implementing the full Workouts section."
  }
};
