export type TrendDirection = "default" | "improving" | "declining" | "neutral" | "insufficient-data";

export type TrendCardData = {
  id: string;
  title: string;
  direction: TrendDirection;
  directionLabel: string;
  explanation: string;
  metricLabel?: string;
  timeRangeLabel?: string;
  supportingValue?: string;
  actionLabel?: string;
  isInteractive?: boolean;
};

// Synthetic runtime validation data. This is not source data from Apple Fitness or Figma.
export const defaultTrendCardData: TrendCardData = {
  id: "synthetic-trend-default",
  title: "Movement consistency",
  direction: "default",
  directionLabel: "Trend signal",
  explanation: "Synthetic trend copy used to validate interpretation without turning the surface into a metric tile.",
  metricLabel: "Daily activity",
  timeRangeLabel: "Recent period",
  actionLabel: "Review synthetic trend"
};

export const improvingTrendCardData: TrendCardData = {
  id: "synthetic-trend-improving",
  title: "Training rhythm",
  direction: "improving",
  directionLabel: "Improving",
  explanation: "Synthetic interpretation indicates repeated records are moving in a stronger direction over time.",
  metricLabel: "Completed sessions",
  timeRangeLabel: "Recent period",
  supportingValue: "Higher consistency"
};

export const decliningTrendCardData: TrendCardData = {
  id: "synthetic-trend-declining",
  title: "Activity pace",
  direction: "declining",
  directionLabel: "Declining",
  explanation: "Synthetic interpretation indicates recent records need attention compared with the earlier pattern.",
  metricLabel: "Activity records",
  timeRangeLabel: "Recent period",
  supportingValue: "Lower consistency"
};

export const neutralTrendCardData: TrendCardData = {
  id: "synthetic-trend-neutral",
  title: "Focus duration",
  direction: "neutral",
  directionLabel: "Stable",
  explanation: "Synthetic interpretation indicates the repeated records are steady rather than clearly improving or declining.",
  metricLabel: "Session records",
  timeRangeLabel: "Recent period",
  supportingValue: "No clear change"
};

export const insufficientDataTrendCardData: TrendCardData = {
  id: "synthetic-trend-insufficient-data",
  title: "Workout pattern",
  direction: "insufficient-data",
  directionLabel: "Insufficient data",
  explanation: "Synthetic state used to verify that missing trend confidence is not presented as failure or decline.",
  metricLabel: "Recorded behavior",
  timeRangeLabel: "Needs more records"
};

export const longExplanationTrendCardData: TrendCardData = {
  id: "synthetic-trend-long-explanation",
  title: "长期训练节奏",
  direction: "neutral",
  directionLabel: "解释较长",
  explanation:
    "这是一段合成运行时验证文案，用来测试 TrendCard 在解释较长、包含中文内容、并且仍然需要清楚表达方向与时间关系时，是否还能保持趋势解释优先，而不是退化成当前数值展示卡片。",
  metricLabel: "合成记录",
  timeRangeLabel: "最近一段时间",
  supportingValue: "趋势解释优先"
};
