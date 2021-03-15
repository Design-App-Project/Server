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
    console.log("req.files:", req.files);
    const value = {
      user_id: req.body.decoded.id,
      text: req.body.text,
      file: req.files,
    };
    const question: IQuestion = new Question(value);
    await question.save();
    res
      .status(200)
      .send(ResponseUtil.successTrue({}, "문의하기 성공하였습니다."));
  }

  async getProfile(req: Request, res: Response) {
    const user: IUser = await Users.findOne({
      user_id: req.body.decoded.id,
    });
    res.status(200).send(ResponseUtil.successTrue(user));
  }

  async editUserInfo(req: Request, res: Response) {
    const filter = {
      user_id: req.body.decoded.id,
    };
    const value = {
      name: req.body.name,
      introduce: req.body.introduce,
      interest: req.body.interest,
    };
    const user: IUser = await Users.findOneAndUpdate(filter, value, {
      new: true,
    });
    res.status(200).send(ResponseUtil.successTrue({}, ""));
  }

  async getUserInfo(req: Request, res: Response) {
    console.log("");
    const filter = {
      user_id: req.body.decoded.id,
    };
    const question: IQuestion = await Question.find(filter);
    res.status(200).send(ResponseUtil.successTrue(question, ""));
  }
}
