import { __testable as Parse } from "../parse";
import { ScheduledStop, ScheduleType } from "../parse-types";
import {
  sampleHtml,
  sampleHeaderText,
  sampleWeekdayText,
  sampleSaturdayText,
  sampleHolidayText,
} from "./sample-html";

describe("getSections", () => {
  const { header, weekday, saturday, holiday } = Parse.getSections(sampleHtml);
  console.log(weekday);
  test("should return valid header", () => {
    expect(header).toEqual(sampleHeaderText);
  });

  test("should return valid weekday section", () => {
    expect(weekday).toEqual(sampleWeekdayText);
  });

  test("should return valid saturday section", () => {
    expect(saturday).toEqual(sampleSaturdayText);
  });

  test("should return valid holiday section", () => {
    expect(holiday).toEqual(sampleHolidayText);
  });
});

describe("parseScheduleType", () => {
  type TypeTestCase = {
    input: string;
    output: ScheduleType;
  };

  describe("should return ScheduleType when input valid", () => {
    const standardCases: TypeTestCase[] = [
      { input: "平", output: ScheduleType.weekday },
      { input: "土", output: ScheduleType.saturday },
      { input: "休", output: ScheduleType.holiday },
    ];

    standardCases.forEach(({ input, output }) => {
      test(`${input} -> ${output}`, () => {
        expect(Parse.parseScheduleType(input)).toEqual(output);
      });
    });
  });

  describe("should throw error when input invalid", () => {
    ["金", "神奈中", ""].forEach((input) => {
      test(`${input ? input : "\\s"}`, () => {
        expect(() => Parse.parseScheduleType(input)).toThrow();
      });
    });
  });
});

describe("parsePublishDate", () => {
  describe("should convert standard dates", () => {
    [
      {
        input: "2021/12/01",
        note: "YYYY/MM/DD",
        output: "2021-11-30T15:00:00.000Z",
      },
      {
        input: "2021/12/4 22:25:08",
        note: "YYYY/MM/DD + ???",
        output: "2021-12-04T13:25:08.000Z",
      },
    ].forEach(({ input, note, output }) => {
      test(note, () => {
        expect(Parse.parsePublishDate(input)).toEqual(output);
      });
    });
  });

  describe("should throw when passed invalid string", () =>{
    [
      {
        input: "",
        note: "empty string",
      },
      {
        input: "///",
        note: "empty values",
      },
    ].forEach(({input, note}) => {
      test(note, () =>{
        expect(() => Parse.parsePublishDate(input)).toThrow();
      });
    })
  });
});

describe("parseHeader", () =>{
  describe("should return header when input valid", () =>{
    const parsed = Parse.parseHeader(sampleHeaderText);
    expect(parsed).toMatchObject({
      busStop: "金井(横浜市栄区)",
      dest: "戸塚バスセンター行",
      publishDate: "2020-11-23T15:00:00.000Z",
    });

    expect(parsed).toHaveProperty("fetchDate");

    const asDate = new Date(parsed.fetchDate).toISOString();
    expect(asDate).toEqual(parsed.fetchDate);
  });
});
