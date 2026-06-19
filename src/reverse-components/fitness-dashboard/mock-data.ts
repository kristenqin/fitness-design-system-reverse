export type WorkoutMetric = {
  label: string;
  value: string;
  trend: string;
  tone: "energy" | "strength" | "recovery";
};

export type WorkoutDay = {
  day: string;
  minutes: number;
};

export type ClassItem = {
  time: string;
  title: string;
  coach: string;
  intensity: "Low" | "Medium" | "High";
};

export const metrics: WorkoutMetric[] = [
  { label: "Active minutes", value: "284", trend: "+18% week over week", tone: "energy" },
  { label: "Strength volume", value: "12.8k", trend: "+940 lb this week", tone: "strength" },
  { label: "Recovery score", value: "86", trend: "Ready for hard training", tone: "recovery" }
];

export const weeklyActivity: WorkoutDay[] = [
  { day: "Mon", minutes: 42 },
  { day: "Tue", minutes: 35 },
  { day: "Wed", minutes: 58 },
  { day: "Thu", minutes: 24 },
  { day: "Fri", minutes: 64 },
  { day: "Sat", minutes: 51 },
  { day: "Sun", minutes: 31 }
];

export const upcomingClasses: ClassItem[] = [
  { time: "07:30", title: "Power Ride", coach: "Maya", intensity: "High" },
  { time: "12:15", title: "Mobility Reset", coach: "Theo", intensity: "Low" },
  { time: "18:00", title: "Full-Body Strength", coach: "Iris", intensity: "Medium" }
];
