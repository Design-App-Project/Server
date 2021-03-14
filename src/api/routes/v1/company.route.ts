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

    // 전체 회사 정보, 필터링 정보 API
    this.app.get("/api/v1/material", [companyController.getAllData]);

    this.app.post("/api/v1/filtering", [companyController.getFilteredData]);

    // 관리자 페이지 API
    this.app.get("/api/v1/question", [companyController.getQuestions]);

    this.app.get("/api/v1/user", [companyController.getUserInfo]);

    this.app.delete("/api/v1/user", [companyController.deleteUserInfo]);

    this.app.post("/api/v1/company", [companyController.addCompany]);

    this.app.delete("/api/v1/company", [companyController.removeCompany]);
  }
}
