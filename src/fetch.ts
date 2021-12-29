import fs from 'fs';
import path from 'path';
import {
  createRouteUrl,
  RouteHeader,
  ROUTES
} from './route/routes';
import { ScheduledStop } from './parse/parse-types';
import { parseSinglePage } from './parse/parse';
import { getHttp } from './http/get-http';

const [_, , outputDir = "."] = process.argv;

type FetchParseLaneArgs = {
  name: string;
  urls: string[];
  label: string;
}

const fetchAndParseLane = async ({name, label, urls}: FetchParseLaneArgs) => {
  let header: any = {};
  let weekday: ScheduledStop[] = [];
  let saturday: ScheduledStop[] = [];
  let holiday: ScheduledStop[] = [];

  for (const url of urls) {
    try {
      console.log('trying to fetch', url);
      const htmlText = await getHttp(url);
      console.log('fetched', url);
      const routeSchedule = parseSinglePage(htmlText)
      weekday = [...weekday, ...routeSchedule.weekday];
      saturday = [...saturday, ...routeSchedule.saturday];
      holiday = [...holiday, ...routeSchedule.holiday];
      header = routeSchedule.header;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    name,
    header: {...header, label},
    weekday,
    saturday,
    holiday,
  };
}

const fetchAndParseMultiple = async () => {
  const lanes = Object.entries(ROUTES).map(([key, routes]) => {
    const { header } = routes[0]
    return {
      name: key,
      label: header.label,
      urls: routes.map(({cs, nid}) => createRouteUrl(cs, nid)),
    };
  });

  const routeDataGroups = [];
  for (const lane of lanes) {
    const parsedData = await fetchAndParseLane(lane);
    routeDataGroups.push(parsedData);
  }

  return routeDataGroups;
};

fetchAndParseMultiple().then(groups => {
  for (const group of groups) {
    const filePath = path.resolve(__dirname, outputDir, `${group.name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(group));
    console.log("wrote to", group.name);
  }
});
