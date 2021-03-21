import { Request, Response } from "express";
import * as crypto from "crypto";
import fs from "fs";
import path from "path";
import mime from "mime-types";

import { UsersModel, IUser, Users } from "../models/users.model";
import { IQuestion, Question } from "../models/question.model";
import { HashUtil } from "../utils/hash.util";
import { ResponseUtil } from "../utils/response.util";
import { ErrorUtil } from "../utils/error.util";

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
    const value = {
      user_id: req.body.decoded.id,
      text: req.body.text,
      file: req.files,
      title: req.body.title,
      email: req.body.email,
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

  async getUserQuestion(req: Request, res: Response) {
    const filter = {
      user_id: req.body.decoded.id,
    };
    const question: IQuestion = await Question.find(filter);

    res.status(200).send(ResponseUtil.successTrue(question, ""));
  }

  async getQuestionFile(req: Request, res: Response) {
    const filename = req.params.filename
    const PATH = path.join(__dirname,'../../../uploads/question',filename)
    res.setHeader('Content-Type','application/octet-stream');
    res.setHeader('Content-Disposition','attachment; filename'+filename);
    res.sendFile(PATH)
  }

  async getBookmark(req: Request, res: Response) {
    const filter = { user_id: req.body.decoded.id };
    const data: IUser = await Users.find(filter)
      .select("bookmark")
      .populate("bookmark");

    res.status(200).send(ResponseUtil.successTrue(data, ""));
  }

  async postBookmark(req: Request, res: Response) {
    const filter = { user_id: req.body.decoded.id };
    const value = { bookmark: req.body.bookmark };

    const user: IUser = await Users.updateOne(filter, { $push: value });

    res
      .status(200)
      .send(ResponseUtil.successTrue({}, "즐겨찾기가 등록되었습니다."));
  }

  async deleteBookmark(req: Request, res: Response) {
    const filter = { user_id: req.body.decoded.id };
    const value = { bookmark: req.body.bookmark };

    const user: IUser = await Users.updateOne(filter, {
      $pull: value,
    });

    res
      .status(200)
      .send(ResponseUtil.successTrue({}, "즐겨찾기 삭제가 완료 되었습니다."));
  }
}
