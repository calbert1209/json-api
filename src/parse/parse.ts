import {
  HourEntry,
  MinuteEntry,
  RouteHeader,
  RouteSchedule,
  ScheduledStop,
  ScheduleType,
  SectionLines,
  StringSections,
} from "./parse-types";

const getLinesForSection = (section: string): SectionLines => {
  const [label, ...others] = section.split("\n");
  let lines = [];
  let last = "";
  for (let i = others.length - 1; i >= 0; i--) {
    const line = others[i];

    if (!/^\d/.test(line)) {
      continue;
    }

    if (/^\d+時\s/.test(line)) {
      lines.push(`${line} ${last}`);
      last = "";
    } else {
      last = line;
    }
  }
  lines.reverse();
  return {
    label,
    lines,
  };
};

// === string[] -> HourEntry[] =================================================

const cleanMinute = (dirtyMinute: string): MinuteEntry => {
  const [minute, note] = dirtyMinute.replace(/[\(\)]/gi, ",").split(",");
  return { minute: parseInt(minute), note };
};

const parseHourEntry = (line: string): HourEntry => {
  const [hour, times] = line.split("時 ");
  const minutes = times.split(" . ").map(cleanMinute);
  return { hour: parseInt(hour), minutes };
};

const hourEntryToEntries = (
  hourEntry: HourEntry,
  type: ScheduleType
): ScheduledStop[] => {
  const { hour, minutes } = hourEntry;
  return minutes.map(({ minute, note }) => {
    return {
      hour,
      minute,
      note,
      type,
      index: hour * 60 + minute,
    };
  });
};

// === Page -> Sections =======================================================

const getSections = (rawHtml: string): StringSections => {
  const trimmed = rawHtml.split("<pre>")[1].split("</pre>")[0];
  const [header, weekday, saturday, holiday] = trimmed.split("■");
  return { header, weekday, saturday, holiday };
};

const parseScheduleType = (label: string): ScheduleType => {
  const firstChar = label[0];
  if (firstChar === "平") {
    return ScheduleType.weekday;
  } else if (firstChar === "土") {
    return ScheduleType.saturday;
  } else if (firstChar === "休") {
    return ScheduleType.holiday;
  } else {
    throw new Error(`could not parse ScheduleType`);
  }
};

// === text -> RouteHeader | ScheduledStop[] ===================================

const parsePublishDate = (publishedAt: string): string => {
  const error = new Error("could not parse header's publish date");
  if (!publishedAt) {
    throw error;
  }

  const [year, month, date] = publishedAt.split("/");
  if ([year, month, date].some((it) => !it)) {
    throw error;
  }

  return new Date([year, month, date].join("/")).toISOString();
};

const parseHeader = (header: string): RouteHeader => {
  const stopName = /^ﾊﾞｽ停名：(.*)/.exec(header)?.[1];
  const dest = /行先：(.*)\n/.exec(header)?.[1];
  const publish = /改正日：([\d\/]*)/.exec(header)?.[1];
  if ([stopName, dest, publish].some((it) => !it)) {
    throw new Error("could not parse header");
  }
  const publishDate = parsePublishDate(publish!);
  const fetchDate = new Date().toISOString();
  return { busStop: stopName!, dest: dest!, publishDate, fetchDate };
};

const parseSection = (section: string): ScheduledStop[] => {
  let sectionEntries: ScheduledStop[] = [];
  let { label, lines } = getLinesForSection(section);
  const scheduleType = parseScheduleType(label);

  for (const line of lines) {
    const parsed = parseHourEntry(line);
    const entries = hourEntryToEntries(parsed, scheduleType);
    sectionEntries = sectionEntries.concat(entries);
  }

  return sectionEntries.filter((ent) => !isNaN(ent.minute));
};

// === html -> RouteSchedule =================================================

export const parseSinglePage = (pageText: string): RouteSchedule => {
  const { header, weekday, saturday, holiday } = getSections(pageText);
  const head = parseHeader(header);
  const wd = parseSection(weekday);
  const sat = parseSection(saturday);
  const hol = parseSection(holiday);
  return {
    header: head,
    weekday: wd,
    saturday: sat,
    holiday: hol,
  };
};

export const __testable = {
  getLinesForSection,
  cleanMinute,
  parseHourEntry,
  hourEntryToEntries,
  getSections,
  parseScheduleType,
  parsePublishDate,
  parseHeader,
  parseSection,
};
