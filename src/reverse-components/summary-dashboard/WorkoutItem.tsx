import "./SummaryDashboard.css";
import type { WorkoutItemData } from "./WorkoutItem.data";

export type WorkoutItemProps = {
  data: WorkoutItemData;
};

const unavailableLabel = "Unavailable";

function normalizeMetadata(value?: string | null) {
  return value && value.trim().length > 0 ? value : unavailableLabel;
}

function createAccessibleName(data: WorkoutItemData) {
  const duration = data.duration ? `duration ${data.duration}` : "duration unavailable";
  const date = data.date ? `date ${data.date}` : "date unavailable";
  return `${data.title}, ${duration}, ${date}`;
}

export function WorkoutItem({ data }: WorkoutItemProps) {
  const duration = normalizeMetadata(data.duration);
  const date = normalizeMetadata(data.date);
  const className = `sdr-workout-item sdr-workout-item--${data.status}${
    data.isInteractive ? " sdr-workout-item--interactive" : ""
  }`;
  const content = (
    <>
      <div className="sdr-workout-item__body">
        <p>Completed record</p>
        <strong>{data.title}</strong>
      </div>
      <dl className="sdr-workout-item__metadata" aria-label="Workout record metadata">
        <div>
          <dt>Duration</dt>
          <dd className={!data.duration ? "sdr-workout-item__unavailable" : undefined}>{duration}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd className={!data.date ? "sdr-workout-item__unavailable" : undefined}>{date}</dd>
        </div>
      </dl>
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
