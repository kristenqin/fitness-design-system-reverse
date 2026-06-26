import "./SummaryDashboard.css";
import type { TrendCardData } from "./TrendCard.data";

export type TrendCardProps = {
  data: TrendCardData;
};

function createAccessibleName(data: TrendCardData) {
  const metric = data.metricLabel ? `${data.metricLabel}, ` : "";
  const timeRange = data.timeRangeLabel ? `${data.timeRangeLabel}, ` : "";
  return `${data.title}, ${metric}${timeRange}${data.directionLabel}. ${data.explanation}`;
}

export function TrendCard({ data }: TrendCardProps) {
  const className = `sdr-trend-card sdr-trend-card--${data.direction}${
    data.isInteractive ? " sdr-trend-card--interactive" : ""
  }`;
  const content = (
    <>
      <div className="sdr-trend-card__header">
        <p>{data.metricLabel ?? "Trend interpretation"}</p>
        <span>{data.directionLabel}</span>
      </div>
      <strong>{data.title}</strong>
      <p className="sdr-trend-card__explanation">{data.explanation}</p>
      <dl className="sdr-trend-card__metadata" aria-label="Trend context">
        {data.timeRangeLabel ? (
          <div>
            <dt>Range</dt>
            <dd>{data.timeRangeLabel}</dd>
          </div>
        ) : null}
        {data.supportingValue ? (
          <div>
            <dt>Support</dt>
            <dd>{data.supportingValue}</dd>
          </div>
        ) : null}
      </dl>
      {data.actionLabel ? <span className="sdr-trend-card__action">{data.actionLabel}</span> : null}
    </>
  );

  if (data.isInteractive) {
    return (
      <button className={className} type="button" aria-label={createAccessibleName(data)}>
        {content}
      </button>
    );
  }

  return (
    <article className={className} aria-label={createAccessibleName(data)}>
      {content}
    </article>
  );
}
