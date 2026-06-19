import type { CSSProperties } from "react";
import "./SummaryDashboard.css";
import {
  defaultSummaryDashboardData,
  type MetricCardData,
  type ProgressRingData,
  type SummaryDashboardData
} from "./SummaryDashboard.data";

export type ProgressRingProps = {
  data: ProgressRingData;
  size?: "compact" | "large";
};

export function ProgressRing({ data, size = "large" }: ProgressRingProps) {
  const ratio = data.goal > 0 ? Math.min(data.value / data.goal, 1) : 0;
  const degrees = Math.round(ratio * 360);
  const percent = Math.round(ratio * 100);

  return (
    <figure
      className={`sdr-progress-ring sdr-progress-ring--${size} sdr-progress-ring--${data.status}`}
      style={{ "--sdr-progress-deg": `${degrees}deg` } as CSSProperties}
      aria-label={`${data.label}: ${data.value} of ${data.goal} ${data.unit}`}
    >
      <div className="sdr-progress-ring__visual" aria-hidden="true">
        <div className="sdr-progress-ring__center">
          <strong>{percent}%</strong>
        </div>
      </div>
      <figcaption>
        <span>{data.label}</span>
        <strong>
          {data.value}/{data.goal}
          <small>{data.unit}</small>
        </strong>
        <em>{data.caption}</em>
      </figcaption>
    </figure>
  );
}

export type MetricCardProps = {
  data: MetricCardData;
};

export function MetricCard({ data }: MetricCardProps) {
  return (
    <article className={`sdr-metric-card sdr-metric-card--${data.status ?? "pending"}`}>
      <p>{data.title}</p>
      <strong>
        {data.value}
        {data.unit ? <small>{data.unit}</small> : null}
      </strong>
      <span>{data.caption}</span>
    </article>
  );
}

export type SummaryDashboardProps = {
  data?: SummaryDashboardData;
  mode?: "default" | "web-adaptation";
};

export function SummaryDashboard({ data = defaultSummaryDashboardData, mode = "default" }: SummaryDashboardProps) {
  return (
    <section className={`sdr-summary-dashboard sdr-summary-dashboard--${mode}`} aria-label="Summary dashboard runtime validation">
      <header className="sdr-summary-dashboard__header">
        <div>
          <p>{data.eyebrow}</p>
          <h1>{data.title}</h1>
        </div>
        <span>captured</span>
      </header>

      <div className="sdr-summary-dashboard__activity">
        <div className="sdr-summary-dashboard__metrics">
          {data.metrics.map((metric) => (
            <MetricCard data={metric} key={metric.title} />
          ))}
        </div>
        <ProgressRing data={data.progress} />
      </div>

      <aside className="sdr-summary-dashboard__insight" aria-label="Synthetic trend validation">
        <p>{data.insight.title}</p>
        <span>{data.insight.body}</span>
      </aside>
    </section>
  );
}
