import { createRouteUrl, Route, Stop } from "./routes";

describe("createRouteUrl", () => {
  test("should produce correct route", () => {
    const kanaiTotsuka: Route = {
      name: "kanai-totsuka",
      cs: "0000800324-12",
      nid: "00126844",
      header: {
        busStop: Stop.kanai,
        dest: Stop.totsuka,
      },
    };

    const { cs, nid } = kanaiTotsuka;
    // 1638381600
    const dts = new Date("2021-12-01T18:00:00.000Z").valueOf() / 1000;
    const url = createRouteUrl(cs, nid, dts);
    expect(url).toEqual(
      "https://www.kanachu.co.jp/dia/diagram/send?cs=0000800324-12&nid=00126844&chk=all&dts=1638381600"
    );
  });
});
