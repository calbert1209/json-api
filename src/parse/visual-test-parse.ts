import fs from "fs";
import path from "path";
import { parseSinglePage } from "./parse";

const BASE_NAME = "kanai-totsuka";
const ROOT_DIR_SEGMENTS = [__dirname, "../.."];
const filepath = path.resolve(
  ...ROOT_DIR_SEGMENTS,
  "source-data",
  `${BASE_NAME}.html`
);

const buffer = fs.readFileSync(filepath);
const htmlString = buffer.toString();
const routeSchedule = parseSinglePage(htmlString);
const routeScheduleJson = JSON.stringify(routeSchedule);
const outFilePath = path.resolve(
  ...ROOT_DIR_SEGMENTS,
  "output",
  `${BASE_NAME}.json`
);
fs.writeFileSync(outFilePath, routeScheduleJson);
