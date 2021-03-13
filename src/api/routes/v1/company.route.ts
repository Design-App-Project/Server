import { Application } from "express";
import { CompanyController } from "../../controllers/company.controller";
import { AuthMiddleware } from "./../../middlewares/auth.middleware";

export class CompanyRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const companyController = new CompanyController();
    const authMiddleware = new AuthMiddleware();

    this.app.post("/api/v1/test-input", [companyController.addCompany]);

    this.app.get("/api/v1/material", [companyController.getAllData]);

    this.app.post("/api/v1/material", [companyController.addCompany]);

    this.app.delete("/api/v1/material", [companyController.removeCompany]);

    this.app.post("/api/v1/filtering", [companyController.getFilteredData]);
  }
}
