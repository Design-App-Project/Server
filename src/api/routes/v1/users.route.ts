import { Application } from "express";
import multer from "multer";

import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { UsersMiddleware } from "../../middlewares/users.middleware";
import { UsersController } from "../../controllers/users.controller";
import { time } from "console";

export class UsersRoute {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.configure();
  }

  configure() {
    const usersController = new UsersController();
    const usersMiddleware = new UsersMiddleware();
    const authMiddleware = new AuthMiddleware();
    const upload = multer({ dest: "./uploads/" });
    // const IMG_PATH = "./uploads/";

    // const storage = multer.diskStorage({
    //   destination(req, file, callback) {
    //     callback(null, IMG_PATH);
    //   },
    //   filename(req, file, callback) {
    //     let timestamp = file.originalname;
    //     callback(null, timestamp);
    //   },
    // });
    // const upload = multer({ storage: storage });

    // 회원가입
    this.app.post("/api/v1/user/signup", [
      usersMiddleware.validatePostSignup,
      usersMiddleware.isNull,
      usersMiddleware.checkAlreadyID,
      usersController.createUser,
    ]);

    // 로그인시 유저정보 유지
    this.app.get("/api/v1/user/signin", [
      authMiddleware.verifyToken,
      usersController.getProfile,
    ]);

    // 아이디 중복검사
    this.app.post("/api/v1/user/id", [
      usersMiddleware.validatePostIsAlreadyID,
      usersMiddleware.isNull,
      usersMiddleware.checkAlreadyID,
      usersController.assureUniqueValue,
    ]);

    // 마이페이지: 유저 문의 하기
    this.app.post(
      "/api/v1/user/question",
      upload.fields([{ name: "file" }, { name: "text" }]),
      [
        // authMiddleware.verifyToken,
        usersController.createUserQuestion,
      ]
    );

    // 마이페이지: 유저 개인 문의 내역 불러오기
    this.app.get("/api/v1/user/question", [
      authMiddleware.verifyToken,
      usersController.getUserInfo,
    ]);

    // 마이페이지: 유저 개인 정보 수정
    this.app.put("/api/v1/user", [
      authMiddleware.verifyToken,
      usersController.editUserInfo,
    ]);
  }
}
