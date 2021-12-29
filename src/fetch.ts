import fs from 'fs';
import path from 'path';
import {
  createRouteUrl,
  ROUTES
} from './route/routes';
import { ScheduledStop } from './parse/parse-types';
import { parseSinglePage } from './parse/parse';
import { getHttp } from './http/get-http';

const [_, , outputDir = "."] = process.argv;

const fetchAndParseLane = async ({name, urls}: {name: string; urls: string[];}) => {
  let header: any = {};
  let times: ScheduledStop[] = [];
  for (const url of urls) {
    try {
      console.log('trying to fetch', url);
      const htmlText = await getHttp(url);
      console.log('fetched', url);
      const routeSchedule = parseSinglePage(htmlText)
      times = [...times, ...routeSchedule.times];
      header = routeSchedule.header;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    name,
    header,
    times,
  };
}

const fetchAndParseMultiple = async () => {
  const lanes = Object.entries(ROUTES).map(([key, routes]) => ({
    name: key,
    urls: routes.map(({cs, nid}) => createRouteUrl(cs, nid)),
  }));

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
