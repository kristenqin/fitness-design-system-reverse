import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryDashboard } from "./SummaryDashboard";
import {
  summaryDashboardCoreOnlyData,
  summaryDashboardFullSemanticLoopData,
  summaryDashboardWithAwardBadgeData,
  summaryDashboardWithMissingAwardData,
  summaryDashboardWithMissingTrendData,
  summaryDashboardWithTrendAndAwardData,
  summaryDashboardWithTrendCardData
} from "./SummaryDashboard.data";

const meta = {
  title: "Patterns/SummaryDashboard/SemanticComposition",
  component: SummaryDashboard,
  parameters: {
    docs: {
      description: {
        component:
          "Optional semantic runtime composition for SummaryDashboard. TrendCard and AwardBadge are tested as optional modules only; this is not a full source page or app shell."
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

export const CoreOnly: Story = {
  name: "CoreOnly",
  args: {
    data: summaryDashboardCoreOnlyData
  }
};

export const WithTrendCard: Story = {
  name: "WithTrendCard",
  args: {
    data: summaryDashboardWithTrendCardData
  }
};

export const WithAwardBadge: Story = {
  name: "WithAwardBadge",
  args: {
    data: summaryDashboardWithAwardBadgeData
  }
};

export const WithTrendAndAward: Story = {
  name: "WithTrendAndAward",
  args: {
    data: summaryDashboardWithTrendAndAwardData
  }
};

export const FullSemanticLoop: Story = {
  name: "FullSemanticLoop",
  args: {
    data: summaryDashboardFullSemanticLoopData
  }
};

export const MissingTrendData: Story = {
  name: "MissingTrendData",
  args: {
    data: summaryDashboardWithMissingTrendData
  }
};

export const MissingAwardData: Story = {
  name: "MissingAwardData",
  args: {
    data: summaryDashboardWithMissingAwardData
  }
};
