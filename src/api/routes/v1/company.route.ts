import { Application } from "express";
import { CompanyController } from "../../controllers/company.controller";

export class CompanyRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const companyController = new CompanyController();
    // this.app.post("/api/v1/test-input", [companyController.createCompanies]);
    this.app.get("/api/v1/material", [companyController.getAllData]);
    this.app.get("/api/v1/filtering", [companyController.getFilteredData]);
  }
}
