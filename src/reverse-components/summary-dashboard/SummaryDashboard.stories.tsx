import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryDashboard } from "./SummaryDashboard";
import { defaultSummaryDashboardData, lowProgressSummaryDashboardData } from "./SummaryDashboard.data";

const meta = {
  title: "Patterns/SummaryDashboard",
  component: SummaryDashboard,
  parameters: {
    docs: {
      description: {
        component:
          "Minimum runtime surface for the captured SummaryDashboard contract. This validates structure, not visual parity or promotion."
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

export const Default: Story = {
  args: {
    data: defaultSummaryDashboardData
  }
};

export const LowProgress: Story = {
  name: "LowProgress",
  args: {
    data: lowProgressSummaryDashboardData
  }
};
