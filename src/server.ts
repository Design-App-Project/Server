import "./env";

import { config } from "./api/utils/config.util";
import Logger from "../logger";
import http from "http";
import app from "./app";

const server: http.Server = http.createServer(app);
const port: number = config.PORT;

// server.listen(port, () => {
//   console.log(`Server running 
//   at port ${port}`);
// });

app.get("/logger", (_, res) => {
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");
  
  res.send("Hello world");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
  Logger.debug(`Server is up and running @ http://localhost:${port}`);
});
export default server;