import express from "express";

import { Models } from "./api/models";
import { CompanyRoute } from "./api/routes/v1/company.route";

const app: express.Application = express();
const routes: any = [];

new Models().init();

app.use(express.json({ limit: "5mb" }));

// cors config
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "content-type, access-token"); //1
  next();
});

//route
routes.push(new CompanyRoute(app));

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("재민 ㅎㅇ");
  }
);

export default app;
