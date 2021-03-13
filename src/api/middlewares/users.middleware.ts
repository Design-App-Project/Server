import { Request, Response, NextFunction } from "express";
import Ajv, { DefinedError } from "ajv";
import addFormat from "ajv-formats";

import { UsersModel, IUser } from "../models/users.model";
import { PostUserSignupSchema } from "./schemas/post.user.signup.schema";
import { PostUserIsAlreadyIDSchema } from "./schemas/post.user.isAlreadyID.schema";
// import { PutUserResetSchema } from "./schemas/put.user.reset.schema";
import { ErrorUtil } from "../utils/error.util";
import { ResponseUtil } from "../utils/response.util";

export class UsersMiddleware {
  private ajv: Ajv;

  constructor() {
    this.ajv = new Ajv();
    addFormat(this.ajv);
  }

  validatePostSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const isValid = this.ajv.validate(PostUserSignupSchema, req.body);
    if (isValid) {
      next();
    } else {
      const error = ErrorUtil.badRequest(
        ``,
        `주어진 데이터가 올바르지 않습니다.`
      );
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  validatePostIsAlreadyID = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const isValid: boolean = this.ajv.validate(
      PostUserIsAlreadyIDSchema,
      req.body
    );
    if (isValid) {
      next();
    } else {
      const error = ErrorUtil.badRequest(
        "",
        `주어진 데이터가 올바르지 않습니다.`
      );
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  checkAlreadyID = async (req: Request, res: Response, next: NextFunction) => {
    const usersModel: UsersModel = new UsersModel();

    const user: IUser = await usersModel.read("id", req.body.id);
    if (!user) {
      next();
    } else {
      const error = ErrorUtil.unAuthorized("", "이미 등록된 아이디입니다.");
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  isNull = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.id == "") {
      const error = ErrorUtil.badRequest("", "아이디는 필수 사항입니다.");
      res.status(error.status).send(ResponseUtil.successFalse(error));
    } else {
      next();
    }
  };
}
