import https from "https";

const getHttp = (url: string) =>
  new Promise<string>((resolve, reject) => {
    https
      .get(
        url,
        {
          rejectUnauthorized: false,
        },
        (res) => {
          const { statusCode } = res;

          if (statusCode !== 200) {
            // Consume response data to free up memory
            res.resume();
            reject(new Error(`Request Failed.\nStatus Code: ${statusCode}`));
            return;
          }

          res.setEncoding("utf8");
          let rawData = "";
          res.on("data", (chunk) => {
            rawData += chunk;
          });
          res.on("end", () => {
            resolve(rawData);
          });
        }
      )
      .on("error", reject);
  });

export { getHttp };
