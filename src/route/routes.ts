const STOP_NAMES = {
  KANAI: "金井(横浜市栄区)",
  TOTSUKA: "戸塚バスセンター",
  OFUNA: "大船駅西口",
};

export const createRouteUrl = (
  cs: string,
  nid: string,
  dts: number = Math.floor(Date.now() / 1000)
): string => {
  return `https://www.kanachu.co.jp/dia/diagram/send?cs=${cs}&nid=${nid}&chk=all&dts=${dts}`;
};

export enum Stop {
  kanai,
  totsuka,
  ofuna,
}

export type RouteHeader = {
  label: string;
  busStop: Stop;
  dest: Stop;
};

export type Route = {
  name: string;
  cs: string;
  nid: string;
  header: RouteHeader;
};

const kanaiTotsuka: Route = {
  name: "kanai-totsuka",
  cs: "0000800324-12",
  nid: "00126844",
  header: {
    label: "金井 → 戸塚",
    busStop: Stop.kanai,
    dest: Stop.totsuka,
  },
};

const totsukaKanai9x: Route = {
  name: "totsuka-kanai-9x",
  cs: "0000800754-1",
  nid: "00126775",
  header: {
    label: "戸塚 → 金井",
    busStop: Stop.totsuka,
    dest: Stop.kanai,
  },
};

const totsukaKanai7x: Route = {
  name: "totsuka-kanai-7x",
  cs: "0000800673-1",
  nid: "00126775",
  header: {
    label: "戸塚 → 金井",
    busStop: Stop.totsuka,
    dest: Stop.kanai,
  },
};

const kanaiOfuna: Route = {
  name: "kanai-ofuna",
  cs: "0000800419-10",
  nid: "00126844",
  header: {
    label: "金井 → 大船",
    busStop: Stop.kanai,
    dest: Stop.ofuna,
  },
};

const ofunaKanai: Route = {
  name: "ofuna-kanai",
  cs: "0000800324-1",
  nid: "00126855",
  header: {
    label: "大船 → 金井",
    busStop: Stop.ofuna,
    dest: Stop.kanai,
  },
};

export const ROUTES: Record<string, Route[]> = {
  kanai_totsuka: [kanaiTotsuka],
  totsuka_kanai: [totsukaKanai7x, totsukaKanai9x],
  kanai_ofuna: [kanaiOfuna],
  ofuna_kanai: [ofunaKanai],
};
