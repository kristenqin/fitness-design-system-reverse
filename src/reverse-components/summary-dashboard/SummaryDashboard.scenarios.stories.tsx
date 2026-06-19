import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryDashboard } from "./SummaryDashboard";
import { lowProgressSummaryDashboardData } from "./SummaryDashboard.data";

const meta = {
  title: "Scenarios/LowProgress",
  component: SummaryDashboard,
  parameters: {
    docs: {
      description: {
        component: "Synthetic low-progress scenario for runtime validation. It is not promotion evidence."
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="sdr-runtime-shell">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof SummaryDashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SummaryDashboardStory: Story = {
  name: "SummaryDashboard",
  args: {
    data: lowProgressSummaryDashboardData
  }
};
