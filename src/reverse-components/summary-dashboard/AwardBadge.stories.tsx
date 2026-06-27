import type { Meta, StoryObj } from "@storybook/react-vite";
import { AwardBadge } from "./AwardBadge";
import {
  defaultAwardBadgeData,
  inProgressAwardBadgeData,
  lockedAwardBadgeData,
  longTitleAwardBadgeData,
  newAwardBadgeData,
  unlockedAwardBadgeData
} from "./AwardBadge.data";

const meta = {
  title: "Components/AwardBadge",
  component: AwardBadge,
  parameters: {
    docs: {
      description: {
        component:
          "Minimum runtime validation for the captured AwardBadge candidate. Data is synthetic and validates reward evidence semantics only."
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="sdr-runtime-shell">
        <div className="sdr-award-story-stack">
          <Story />
        </div>
      </div>
    )
  ]
} satisfies Meta<typeof AwardBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: defaultAwardBadgeData
  }
};

export const Locked: Story = {
  args: {
    data: lockedAwardBadgeData
  }
};

export const Unlocked: Story = {
  args: {
    data: unlockedAwardBadgeData
  }
};

export const New: Story = {
  args: {
    data: newAwardBadgeData
  }
};

export const InProgress: Story = {
  name: "InProgress",
  args: {
    data: inProgressAwardBadgeData
  }
};

export const LongTitle: Story = {
  name: "LongTitle",
  args: {
    data: longTitleAwardBadgeData
  }
};
