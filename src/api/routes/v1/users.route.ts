import { Application } from "express";

import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { UsersMiddleware } from "../../middlewares/users.middleware";
import { UsersController } from "../../controllers/users.controller";

export class UsersRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const usersController = new UsersController();
    const usersMiddleware = new UsersMiddleware();

    this.app.post("/api/v1/user/signup", [
      usersMiddleware.validatePostSignup,
      usersMiddleware.isNull,
      usersMiddleware.checkAlreadyID,
      usersController.createUser,
    ]);

    this.app.post("/api/v1/id", [
      usersMiddleware.validatePostIsAlreadyID,
      usersMiddleware.isNull,
      usersMiddleware.checkAlreadyID,
      usersController.assureUniqueValue,
    ]);

    this.app.post("/api/v1/question", [usersController.createUserQuestion]);
  }
}
