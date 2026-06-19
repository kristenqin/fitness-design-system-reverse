import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressRing } from "./SummaryDashboard";
import {
  completedProgressRingData,
  defaultSummaryDashboardData,
  emptyProgressRingData,
  lowProgressSummaryDashboardData,
  overachievedProgressRingData,
  unavailableProgressRingData
} from "./SummaryDashboard.data";

const meta = {
  title: "Components/ProgressRing",
  component: ProgressRing,
  parameters: {
    docs: {
      description: {
        component: "Runtime validation for the captured ProgressRing candidate. This is not a promoted component."
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
} satisfies Meta<typeof ProgressRing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: defaultSummaryDashboardData.progress
  }
};

export const LowProgress: Story = {
  name: "LowProgress",
  args: {
    data: lowProgressSummaryDashboardData.progress
  }
};

export const Completed: Story = {
  args: {
    data: completedProgressRingData
  }
};

export const Empty: Story = {
  args: {
    data: emptyProgressRingData
  }
};

export const Overachieved: Story = {
  args: {
    data: overachievedProgressRingData
  }
};

export const Unavailable: Story = {
  args: {
    data: unavailableProgressRingData
  }
};
