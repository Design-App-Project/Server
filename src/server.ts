import app from "./app";
import { createServer } from "http";
import { Models } from "./models";

const port: number = Number(process.env.PORT) || 3000;

new Models().init();

const server = createServer(app);

server.listen(port, () => {
  console.log(`${port}포트 서버 대기 중!`);
});

export default server;
