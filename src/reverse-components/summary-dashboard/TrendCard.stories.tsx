import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrendCard } from "./TrendCard";
import {
  decliningTrendCardData,
  defaultTrendCardData,
  improvingTrendCardData,
  insufficientDataTrendCardData,
  longExplanationTrendCardData,
  neutralTrendCardData
} from "./TrendCard.data";

const meta = {
  title: "Components/TrendCard",
  component: TrendCard,
  parameters: {
    docs: {
      description: {
        component:
          "Minimum runtime validation for the captured TrendCard candidate. Data is synthetic and validates direction plus interpretation over time only."
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="sdr-runtime-shell">
        <div className="sdr-trend-story-stack">
          <Story />
        </div>
      </div>
    )
  ]
} satisfies Meta<typeof TrendCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: defaultTrendCardData
  }
};

export const Improving: Story = {
  args: {
    data: improvingTrendCardData
  }
};

export const Declining: Story = {
  args: {
    data: decliningTrendCardData
  }
};

export const Neutral: Story = {
  args: {
    data: neutralTrendCardData
  }
};

export const InsufficientData: Story = {
  name: "InsufficientData",
  args: {
    data: insufficientDataTrendCardData
  }
};

export const LongExplanation: Story = {
  name: "LongExplanation",
  args: {
    data: longExplanationTrendCardData
  }
};
