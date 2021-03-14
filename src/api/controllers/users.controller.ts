import { Request, Response } from "express";

import { UsersModel, IUser, Users } from "../models/users.model";
import { IQuestion, Question } from "../models/question.model";
import { HashUtil } from "../utils/hash.util";
import { ResponseUtil } from "../utils/response.util";
import { ErrorUtil } from "../utils/error.util";

import * as crypto from "crypto";

export class UsersController {
  constructor() {}

  async createUser(req: Request, res: Response) {
    const usersModel = new UsersModel();

    let salt = crypto.randomBytes(16).toString("base64");
    req.body.pwd = HashUtil.getHashedValue(req.body.pwd, salt);
    req.body.salt = salt;

    await usersModel.create(req.body);
    res
      .status(200)
      .send(ResponseUtil.successTrue({}, "회원가입에 성공하셨습니다."));
  }

  async assureUniqueValue(req: Request, res: Response) {
    console.log("assure");
    res.status(200).send(ResponseUtil.successTrue({}));
  }

  async createUserQuestion(req: Request, res: Response) {
    const question: IQuestion = new Question(req.body);
    const data = await question.save();
    if (data) {
      res
        .status(200)
        .send(ResponseUtil.successTrue({}, "문의하기 성공하였습니다."));
    } else {
      const error = ErrorUtil.badRequest(
        "",
        "파일형식이 잘못되었습니다. or save실패"
      );
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  }

  async getProfile(req: Request, res: Response) {
    const user: IUser = await Users.findOne({
      user_id: req.body.decoded.user_id,
    });
    res.status(200).send(ResponseUtil.successTrue(user));
  }

  //   async allowedNickname(req: Request, res: Response) {
  //     res.status(200).send(ResponseUtil.successTrue({}, ""));
  //   }
  // async updateNickname(req: Request, res: Response){
  //   const usersModel = new UsersModel();

  // }

  //   async updateUser(req: Request, res: Response) {
  //     const usersModel = new UsersModel();

  //     let salt = crypto.randomBytes(16).toString("base64");
  //     req.body.password = HashUtil.getHashedValue(req.body.password, salt);
  //     req.body.salt = salt;
  //     await usersModel.updateByEmail(req.body);

  //     res
  //       .status(200)
  //       .send(ResponseUtil.successTrue({}, "비밀번호가 변경되었습니다."));
  //   }

  //   async deleteUser(req: Request, res: Response) {
  //     const userModel: UsersModel = new UsersModel();
  //     const filter = {
  //       email: req.body.email,
  //     };
  //     await userModel.delete(filter);
  //     res.status(200).send(ResponseUtil.successTrue({}));
  //   }
}
