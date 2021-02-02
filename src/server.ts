import "./env";
import { config } from "./api/utils/config.util";

import http from "http";
import app from "./app";

const server: http.Server = http.createServer(app);
const port: number = config.PORT;

server.listen(port, () => {
  console.log(`Server running 
  at port ${port}`);
});

export default server;
