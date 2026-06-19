import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard } from "./SummaryDashboard";
import { defaultSummaryDashboardData, extremeMetricData, longChineseMetricData } from "./SummaryDashboard.data";

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
