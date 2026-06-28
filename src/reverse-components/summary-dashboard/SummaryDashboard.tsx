import type { CSSProperties } from "react";
import "./SummaryDashboard.css";
import {
  defaultSummaryDashboardData,
  type MetricCardData,
  type ProgressRingData,
  type SummaryDashboardData
} from "./SummaryDashboard.data";
import { WorkoutItem } from "./WorkoutItem";
import { TrendCard } from "./TrendCard";
import { AwardBadge } from "./AwardBadge";

export type ProgressRingProps = {
  data: ProgressRingData;
  size?: "compact" | "large";
};

export function ProgressRing({ data, size = "large" }: ProgressRingProps) {
  const rawRatio = data.goal > 0 ? data.value / data.goal : 0;
  const visualRatio = Math.min(rawRatio, 1);
  const degrees = Math.round(visualRatio * 360);
  const percent = Math.round(rawRatio * 100);
  const displayPercent = data.status === "unavailable" ? "N/A" : `${percent}%`;

  return (
    <figure
      className={`sdr-progress-ring sdr-progress-ring--${size} sdr-progress-ring--${data.status}`}
      style={{ "--sdr-progress-deg": `${degrees}deg` } as CSSProperties}
      aria-label={data.ariaLabel ?? `${data.label}: ${data.value} of ${data.goal} ${data.unit}`}
    >
      <div className="sdr-progress-ring__visual" aria-hidden="true">
        <div className="sdr-progress-ring__center">
          <strong>{displayPercent}</strong>
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
  const className = `sdr-metric-card sdr-metric-card--${data.status ?? "pending"}${
    data.isInteractive ? " sdr-metric-card--interactive" : ""
  }`;
  const content = (
    <>
      <p>{data.title}</p>
      <strong>
        {data.value}
        {data.unit ? <small>{data.unit}</small> : null}
      </strong>
      <span>{data.caption}</span>
    </>
  );

  if (data.isInteractive) {
    return (
      <button className={className} type="button" aria-label={data.actionLabel ?? data.title}>
        {content}
      </button>
    );
  }

  return (
    <article className={className} aria-busy={data.status === "loading" ? true : undefined}>
      {content}
    </article>
  );
}

export type SummaryDashboardProps = {
  data?: SummaryDashboardData;
  mode?: "default" | "web-adaptation";
};

export function SummaryDashboard({ data = defaultSummaryDashboardData, mode = "default" }: SummaryDashboardProps) {
  const hasWorkoutItems = data.workouts && data.workouts.items.length > 0;
  const hasTrendItem = Boolean(data.trend?.item);
  const hasAwardItems = data.awards && data.awards.items.length > 0;

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

      {data.workouts ? (
        <section className="sdr-summary-dashboard__workouts" aria-label="Optional workouts module runtime validation">
          <header>
            <p>{data.workouts.title}</p>
            <span>optional</span>
          </header>
          {hasWorkoutItems ? (
            <div className="sdr-summary-dashboard__workout-list">
              {data.workouts.items.map((workout) => (
                <WorkoutItem data={workout} key={workout.id} />
              ))}
            </div>
          ) : (
            <div className="sdr-summary-dashboard__workouts-empty" role="status">
              {data.workouts.unavailableMessage}
            </div>
          )}
        </section>
      ) : null}

      {data.trend ? (
        <section className="sdr-summary-dashboard__semantic-module" aria-label="Optional trend module runtime validation">
          <header>
            <p>{data.trend.title}</p>
            <span>optional</span>
          </header>
          {hasTrendItem && data.trend.item ? (
            <TrendCard data={data.trend.item} />
          ) : (
            <div className="sdr-summary-dashboard__module-empty" role="status">
              {data.trend.unavailableMessage}
            </div>
          )}
        </section>
      ) : null}

      {data.awards ? (
        <section className="sdr-summary-dashboard__semantic-module" aria-label="Optional awards module runtime validation">
          <header>
            <p>{data.awards.title}</p>
            <span>optional</span>
          </header>
          {hasAwardItems ? (
            <div className="sdr-summary-dashboard__award-list">
              {data.awards.items.map((award) => (
                <AwardBadge data={award} key={award.id} />
              ))}
            </div>
          ) : (
            <div className="sdr-summary-dashboard__module-empty" role="status">
              {data.awards.unavailableMessage}
            </div>
          )}
        </section>
      ) : null}
    </section>
  );
}
