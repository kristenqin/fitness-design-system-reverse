import type { Meta, StoryObj } from "@storybook/react-vite";
import "./SummaryDashboard.css";

function TypographyMetricRoles() {
  return (
    <section className="sdr-typography-roles" aria-label="Typography metric roles runtime validation">
      <div className="sdr-typography-roles__row">
        <span>type.page.title</span>
        <strong className="sdr-type-page-title">Daily summary</strong>
      </div>
      <div className="sdr-typography-roles__row">
        <span>type.section.title</span>
        <strong className="sdr-type-section-title">Activity</strong>
      </div>
      <div className="sdr-typography-roles__row">
        <span>type.metric.value</span>
        <strong className="sdr-type-metric-value">124</strong>
      </div>
      <div className="sdr-typography-roles__row">
        <span>type.metric.unit</span>
        <strong className="sdr-type-metric-unit">CAL</strong>
      </div>
      <div className="sdr-typography-roles__row">
        <span>type.caption</span>
        <span className="sdr-type-caption">Synthetic caption copy for compact metric surfaces.</span>
      </div>
    </section>
  );
}

const meta = {
  title: "Style System/Typography",
  component: TypographyMetricRoles,
  parameters: {
    docs: {
      description: {
        component: "Minimum typography metric roles validation. This uses pending semantic roles, not extracted Figma token values."
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
} satisfies Meta<typeof TypographyMetricRoles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MetricRoles: Story = {
  name: "MetricRoles"
};
