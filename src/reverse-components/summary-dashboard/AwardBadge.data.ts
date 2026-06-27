export type AwardBadgeStatus = "default" | "locked" | "unlocked" | "new" | "in-progress";

export type AwardBadgeData = {
  id: string;
  title: string;
  status: AwardBadgeStatus;
  statusLabel: string;
  description?: string;
  progressLabel?: string;
  actionLabel?: string;
  isInteractive?: boolean;
};

// Synthetic runtime validation data. This is not Apple Fitness source data and not Figma source data.
export const defaultAwardBadgeData: AwardBadgeData = {
  id: "synthetic-award-default",
  title: "Consistency marker",
  status: "default",
  statusLabel: "Reward evidence",
  description: "Synthetic reward evidence used to validate the badge as achievement information, not decoration."
};

export const lockedAwardBadgeData: AwardBadgeData = {
  id: "synthetic-award-locked",
  title: "Future milestone",
  status: "locked",
  statusLabel: "Locked",
  description: "Synthetic locked state that does not imply the reward has been earned.",
  progressLabel: "Needs more completed records"
};

export const unlockedAwardBadgeData: AwardBadgeData = {
  id: "synthetic-award-unlocked",
  title: "Milestone reached",
  status: "unlocked",
  statusLabel: "Unlocked",
  description: "Synthetic unlocked state used to validate visible earned-reward evidence.",
  progressLabel: "Reward evidence available"
};

export const newAwardBadgeData: AwardBadgeData = {
  id: "synthetic-award-new",
  title: "New achievement",
  status: "new",
  statusLabel: "New",
  description: "Synthetic new state used to validate a recently earned marker without using real award assets.",
  progressLabel: "Recently recognized"
};

export const inProgressAwardBadgeData: AwardBadgeData = {
  id: "synthetic-award-in-progress",
  title: "Progress toward reward",
  status: "in-progress",
  statusLabel: "In progress",
  description: "Synthetic in-progress state that communicates partial reward evidence without claiming completion.",
  progressLabel: "Partial progress"
};

export const longTitleAwardBadgeData: AwardBadgeData = {
  id: "synthetic-award-long-title",
  title: "Long achievement marker for repeated behavior across a sustained practice window",
  status: "default",
  statusLabel: "Reward evidence",
  description: "Synthetic long-title pressure data for validating that reward semantics remain readable.",
  progressLabel: "Runtime validation data"
};
