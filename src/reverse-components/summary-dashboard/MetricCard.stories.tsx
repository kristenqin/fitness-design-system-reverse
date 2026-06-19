import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard } from "./SummaryDashboard";
import {
  defaultSummaryDashboardData,
  emptyMetricData,
  errorMetricData,
  extremeMetricData,
  goalCompletedMetricData,
  interactiveMetricData,
  loadingMetricData,
  longChineseMetricData,
  overachievedMetricData
} from "./SummaryDashboard.data";

const meta = {
  title: "Components/MetricCard",
  component: MetricCard,
  parameters: {
    docs: {
      description: {
        component: "Runtime validation for the captured MetricCard candidate. Data is synthetic and only exercises layout pressure."
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="sdr-runtime-shell">
        <div className="sdr-story-grid">
          <Story />
        </div>
      </div>
    )
  ]
} satisfies Meta<typeof MetricCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: defaultSummaryDashboardData.metrics[0]
  }
};

export const LongChineseText: Story = {
  name: "LongChineseText",
  args: {
    data: longChineseMetricData
  }
};

export const ExtremeValue: Story = {
  name: "ExtremeValue",
  args: {
    data: extremeMetricData
  }
};

export const Loading: Story = {
  args: {
    data: loadingMetricData
  }
};

export const Empty: Story = {
  args: {
    data: emptyMetricData
  }
};

export const Error: Story = {
  args: {
    data: errorMetricData
  }
};

export const GoalCompleted: Story = {
  name: "GoalCompleted",
  args: {
    data: goalCompletedMetricData
  }
};

export const Overachieved: Story = {
  args: {
    data: overachievedMetricData
  }
};

export const InteractiveTarget: Story = {
  name: "InteractiveTarget",
  args: {
    data: interactiveMetricData
  }
};
