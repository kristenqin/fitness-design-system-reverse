import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryDashboard } from "./SummaryDashboard";
import { defaultSummaryDashboardData } from "./SummaryDashboard.data";

const meta = {
  title: "Experiments/WebAdaptation",
  component: SummaryDashboard,
  parameters: {
    docs: {
      description: {
        component: "Web adaptation experiment for the captured SummaryDashboard pattern. This is intentionally unstable."
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="sdr-runtime-shell sdr-runtime-shell--light">
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
    data: defaultSummaryDashboardData,
    mode: "web-adaptation"
  }
};
