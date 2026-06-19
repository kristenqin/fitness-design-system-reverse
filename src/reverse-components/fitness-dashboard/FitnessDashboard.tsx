import { Activity, Dumbbell, HeartPulse } from "lucide-react";
import "./FitnessDashboard.css";
import { metrics, upcomingClasses, weeklyActivity, type WorkoutMetric } from "./mock-data";

const iconByTone: Record<WorkoutMetric["tone"], typeof Activity> = {
  energy: Activity,
  strength: Dumbbell,
  recovery: HeartPulse
};

export function FitnessDashboard() {
  const maxMinutes = Math.max(...weeklyActivity.map((item) => item.minutes));

  return (
    <section className="fitness-dashboard" aria-label="Fitness dashboard reverse surface">
      <header className="fitness-dashboard__header">
        <div>
          <p className="fitness-dashboard__eyebrow">Reverse surface</p>
          <h1>Fitness performance dashboard</h1>
        </div>
        <div className="fitness-dashboard__status" aria-label="Weekly goal completion">
          <span>Goal</span>
          <strong>78%</strong>
        </div>
      </header>

      <div className="fitness-dashboard__metrics" aria-label="Workout metrics">
        {metrics.map((metric) => {
          const Icon = iconByTone[metric.tone];
          return (
            <article className={`fitness-dashboard__metric fitness-dashboard__metric--${metric.tone}`} key={metric.label}>
              <div className="fitness-dashboard__metric-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={2.2} />
              </div>
              <div>
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
                <span>{metric.trend}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="fitness-dashboard__content">
        <article className="fitness-dashboard__panel" aria-labelledby="activity-title">
          <div className="fitness-dashboard__panel-heading">
            <h2 id="activity-title">Weekly activity</h2>
            <span>Minutes</span>
          </div>
          <div className="fitness-dashboard__bars" aria-label="Weekly workout minutes">
            {weeklyActivity.map((item) => (
              <div className="fitness-dashboard__bar-item" key={item.day}>
                <div className="fitness-dashboard__bar-track">
                  <span style={{ height: `${(item.minutes / maxMinutes) * 100}%` }} />
                </div>
                <strong>{item.minutes}</strong>
                <p>{item.day}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="fitness-dashboard__panel" aria-labelledby="classes-title">
          <div className="fitness-dashboard__panel-heading">
            <h2 id="classes-title">Upcoming classes</h2>
            <span>Today</span>
          </div>
          <div className="fitness-dashboard__class-list">
            {upcomingClasses.map((item) => (
              <div className="fitness-dashboard__class-item" key={`${item.time}-${item.title}`}>
                <time>{item.time}</time>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.coach}</p>
                </div>
                <span className={`fitness-dashboard__intensity fitness-dashboard__intensity--${item.intensity.toLowerCase()}`}>
                  {item.intensity}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
