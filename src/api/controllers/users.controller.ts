import { Request, Response } from "express";

import { UsersModel, IUser } from "../models/users.model";
import { HashUtil } from "../utils/hash.util";
import { ResponseUtil } from "../utils/response.util";

import * as crypto from "crypto";

export class UsersController {
  constructor() {}

  async createUser(req: Request, res: Response) {
    const usersModel = new UsersModel();

    let salt = crypto.randomBytes(16).toString("base64");
    req.body.pwd = HashUtil.getHashedValue(req.body.pwd, salt);
    req.body.salt = salt;

    await usersModel.create(req.body);
    res.status(200).send(ResponseUtil.successTrue({}, ""));
  }

  async assureUniqueValue(req: Request, res: Response) {
    console.log("assure");
    res.status(200).send(ResponseUtil.successTrue({}));
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

  //   async getProfile(req: Request, res: Response) {
  //     const userModel = new UsersModel();
  //     const user = await userModel.readByEmail(req.body.decoded.email);
  //     res.status(200).send(ResponseUtil.successTrue(user));
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
