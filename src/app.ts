import * as express from "express";

const app: express.Application = express();

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("재민 ㅎㅇ");
  }
);

export default app;
