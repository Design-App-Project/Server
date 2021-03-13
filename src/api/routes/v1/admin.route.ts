import { Application } from "express";
import { AdminController } from "../../controllers/admin.controller";

export class adminRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const adminController = new AdminController();

    this.app.post("/api/v1/company", [adminController.addCompany]);

    this.app.delete("/api/v1/company", [adminController.removeCompany]);

    this.app.get("/api/v1/question", [adminController.getQuestions]);
  }
}
