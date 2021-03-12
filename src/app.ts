import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import path from "path";

import { Models } from "./api/models";
import { PassportConfig } from "./api/utils/passport.local.util";
import { IndexRoute } from "./api/routes/v1/index.route";
import { CompanyRoute } from "./api/routes/v1/company.route";
import { EditTypeOfDbFiled } from "./api/utils/editTypeOfDbField.util";
import { AuthMiddleware } from "./api/middlewares/auth.middleware";

const app: express.Application = express();
const routes: any = [];
const passportConfig = new PassportConfig();
const root = path.join(__dirname, "public");
(async () => {
  await new Models().init();
})();

// views setting
app.use(express.static(root));
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

// passport config
app.use(passport.initialize());
app.use(passport.session());
passportConfig.run();

// cors config
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "3.18.72.134");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type, access-token, refresh-token"
  ); //1
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// // block CSRF
app.use("/api/*", AuthMiddleware.blockCSRF);

//route
routes.push(new CompanyRoute(app));
routes.push(new IndexRoute(app));

//editCsvUtil
// new EditTypeOfDbFiled().StringToArray();

export default app;
