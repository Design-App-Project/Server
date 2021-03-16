import { Application } from "express";
import multer from "multer";

import { CompanyController } from "../../controllers/company.controller";
import { AuthMiddleware } from "../../middlewares/auth.middleware";

export class CompanyRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const companyController = new CompanyController();
    const authMiddleware = new AuthMiddleware();

    const IMG_PATH = "uploads/company";

    const storage = multer.diskStorage({
      destination(req, file, callback) {
        callback(null, IMG_PATH);
      },
      filename(req, file, callback) {
        let timestamp = file.originalname;
        callback(null, timestamp);
      },
    });
    const upload = multer({ storage: storage });

    // 전체 회사 정보
    this.app.get("/api/v1/material", [companyController.getAllData]);
    // 필터링 정보
    this.app.post("/api/v1/filtering", [companyController.getFilteredData]);

    // ** 관리자 페이지 API ** //
    // 관리자페이지: 모든 유저 문의 내역 불러오기
    this.app.get("/api/v1/admin/question", [companyController.getAllQuestions]);

    // 관리자페이지: 모든 유저 정보 불러오기
    this.app.get("/api/v1/admin/user", [companyController.getAllUserInfo]);

    // 관리자페이지: 해당유저 정보 삭제
    this.app.delete("/api/v1/admin/user", [companyController.deleteUserInfo]);

    // 관리자페이지: 업체 추가
    this.app.post(
      "/api/v1/admin/company",
      upload.fields([
        { name: "id" },
        { name: "img_path" },
        { name: "title" },
        { name: "address" },
        { name: "telephone" },
        { name: "sample_imgs" },
        { name: "likes" },
        { name: "tag" },
        { name: "category" },
        { name: "open" },
      ]),
      [authMiddleware.verifyToken, companyController.addCompany]
    );

    // 관리자페이지: 업체 삭제
    this.app.delete("/api/v1/admin/company", [companyController.removeCompany]);
  }
}
