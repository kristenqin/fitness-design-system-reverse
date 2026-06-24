import type { Meta, StoryObj } from "@storybook/react-vite";
import { WorkoutItem } from "./WorkoutItem";
import {
  defaultWorkoutItemData,
  interactiveWorkoutItemData,
  longTitleWorkoutItemData,
  missingDateWorkoutItemData,
  missingDurationWorkoutItemData,
  unavailableWorkoutItemData
} from "./WorkoutItem.data";

const meta = {
  title: "Components/WorkoutItem",
  component: WorkoutItem,
  parameters: {
    docs: {
      description: {
        component:
          "Minimum runtime validation for the captured WorkoutItem candidate. Data is synthetic and validates completed-record semantics only."
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="sdr-runtime-shell">
        <div className="sdr-workout-story-stack">
          <Story />
        </div>
      </div>
    )
  ]
} satisfies Meta<typeof WorkoutItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: defaultWorkoutItemData
  }
};

export const LongTitle: Story = {
  name: "LongTitle",
  args: {
    data: longTitleWorkoutItemData
  }
};

export const MissingDuration: Story = {
  name: "MissingDuration",
  args: {
    data: missingDurationWorkoutItemData
  }
};

export const MissingDate: Story = {
  name: "MissingDate",
  args: {
    data: missingDateWorkoutItemData
  }
};

export const InteractiveTarget: Story = {
  name: "InteractiveTarget",
  args: {
    data: interactiveWorkoutItemData
  }
};

export const Unavailable: Story = {
  args: {
    data: unavailableWorkoutItemData
  }
};
