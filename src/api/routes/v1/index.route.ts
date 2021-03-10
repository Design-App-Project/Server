import { Application } from "express";

import { IndexController } from "./../../controllers/index.controller";

export class IndexRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const indexController = new IndexController();

    this.app.get("/*", [indexController.sendIndex]);
  }
}
