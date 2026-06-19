export type ProgressStatus = "low" | "pending" | "completed";

export type ProgressRingData = {
  label: string;
  value: number;
  goal: number;
  unit: string;
  status: ProgressStatus;
  caption: string;
};

export type MetricCardData = {
  title: string;
  value: string;
  unit?: string;
  caption: string;
  status?: ProgressStatus;
};

export type SummaryDashboardData = {
  eyebrow: string;
  title: string;
  progress: ProgressRingData;
  metrics: MetricCardData[];
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
