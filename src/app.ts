import express from "express";

import { Models } from "./api/models";
import { CompanyRoute } from "./api/routes/v1/company.route";

const app: express.Application = express();
const routes: any = [];

new Models().init();

app.use(express.json({ limit: "5mb" }));

//route
routes.push(new CompanyRoute(app));

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("재민 ㅎㅇ");
  }
);

export default app;
