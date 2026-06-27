import "./SummaryDashboard.css";
import type { AwardBadgeData } from "./AwardBadge.data";

export type AwardBadgeProps = {
  data: AwardBadgeData;
};

function createAccessibleName(data: AwardBadgeData) {
  const description = data.description ? ` ${data.description}` : "";
  const progress = data.progressLabel ? ` ${data.progressLabel}.` : "";
  return `${data.title}, ${data.statusLabel}.${description}${progress}`;
}

export function AwardBadge({ data }: AwardBadgeProps) {
  const className = `sdr-award-badge sdr-award-badge--${data.status}${
    data.isInteractive ? " sdr-award-badge--interactive" : ""
  }`;
  const content = (
    <>
      <div className="sdr-award-badge__symbol" aria-hidden="true">
        <span />
      </div>
      <div className="sdr-award-badge__body">
        <p>Reward evidence</p>
        <strong>{data.title}</strong>
        <span className="sdr-award-badge__status">{data.statusLabel}</span>
        {data.description ? <span className="sdr-award-badge__description">{data.description}</span> : null}
        {data.progressLabel ? <span className="sdr-award-badge__progress">{data.progressLabel}</span> : null}
      </div>
      {data.actionLabel ? <span className="sdr-award-badge__action">{data.actionLabel}</span> : null}
    </>
  );

  if (data.isInteractive) {
    return (
      <button className={className} type="button" aria-label={data.actionLabel ?? createAccessibleName(data)}>
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
