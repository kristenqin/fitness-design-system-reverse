import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryDashboard } from "./SummaryDashboard";
import {
  summaryDashboardWithMissingWorkoutData,
  summaryDashboardWithoutWorkoutItemsData,
  summaryDashboardWithWorkoutItemsData
} from "./SummaryDashboard.data";

const meta = {
  title: "Patterns/SummaryDashboard/OptionalModules",
  component: SummaryDashboard,
  parameters: {
    docs: {
      description: {
        component:
          "Optional module validation for the captured SummaryDashboard pattern. Workouts are tested as an optional module only, not as a full Workouts section."
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

export const WithWorkoutItems: Story = {
  name: "WithWorkoutItems",
  args: {
    data: summaryDashboardWithWorkoutItemsData
  }
};

export const WithoutWorkoutItems: Story = {
  name: "WithoutWorkoutItems",
  args: {
    data: summaryDashboardWithoutWorkoutItemsData
  }
};

export const MissingWorkoutData: Story = {
  name: "MissingWorkoutData",
  args: {
    data: summaryDashboardWithMissingWorkoutData
  }
};
