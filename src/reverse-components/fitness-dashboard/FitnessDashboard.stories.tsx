import type { Meta, StoryObj } from "@storybook/react-vite";
import { FitnessDashboard } from "./FitnessDashboard";

const meta = {
  title: "Reverse Patterns/Fitness/FitnessDashboard",
  component: FitnessDashboard,
  parameters: {
    docs: {
      description: {
        component:
          "A contract-first reverse surface for fitness dashboard anatomy, metrics, weekly activity, and class scheduling patterns."
      }
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FitnessDashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
