export type MinuteEntry = {
  minute: number;
  note: string;
};

export type HourEntry = {
  hour: number;
  minutes: MinuteEntry[];
};

export type ScheduledStop = {
  hour: number;
  minute: number;
  note?: string;
  type: ScheduleType;
  index: number;
};

export type SectionLines = {
  label: string;
  lines: string[];
};

export type StringSections = {
  header: string;
  weekday: string;
  saturday: string;
  holiday: string;
};

export enum ScheduleType {
  weekday = "weekday",
  saturday = "saturday",
  holiday = "holiday",
}

export type RouteHeader = {
  busStop: string;
  dest: string;
  publishDate: string;
  fetchDate: string;
};

export type RouteSchedule = {
  header: RouteHeader;
  times: ScheduledStop[];
};
