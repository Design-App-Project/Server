import { Application } from "express";

import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { AuthController } from "../../controllers/auth.controller";
import { ValidateMiddleware } from "./../../middlewares/validate.middleware";

export class AuthRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const validateMiddleware = new ValidateMiddleware();
    const authController = new AuthController();
    const authMiddleware = new AuthMiddleware();

    this.app.post("/api/v1/auth/signin", [
      validateMiddleware.authRoute,
      authMiddleware.verifyUserByLocalPassport,
      authController.createJWT,
    ]);

    this.app.get("/api/v1/auth/logout", [authController.logout]);

    this.app.get("/api/v1/auth/access-token", [
      authMiddleware.verifyToken,
      authController.refreshAccessToken,
    ]);
  }
}
