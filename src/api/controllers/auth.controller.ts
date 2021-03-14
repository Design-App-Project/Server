import { Request, Response } from "express";

import { ResponseUtil } from "../utils/response.util";
import JWTUtil, {
  PayloadAccessToken,
  PayloadRefreshToken,
} from "../utils/jwt.util";
import { UsersModel } from "./../models/users.model";

export class AuthController {
  constructor() {}

  async createJWT(req: Request, res: Response) {
    // @TODO split to token.util.ts

    const jwtUtil = new JWTUtil();

    const usersModel = new UsersModel();
    const user = await usersModel.read("user_id", req.body.user_id);
    const accessPayload: PayloadAccessToken = {
      id: user.user_id,
      issuer: "http://3.18.72.134/",
    };

    const refreshPayload: PayloadRefreshToken = {
      id: user.user_id,
      issuer: "http://3.18.72.134/",
    };

    try {
      const accessToken = jwtUtil.sign(accessPayload, "access");
      const refreshToken = jwtUtil.sign(refreshPayload, "refresh");
      console.log(parseInt(jwtUtil.accessTokenLife));
      res.cookie("access-token", accessToken, {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * parseInt(jwtUtil.accessTokenLife),
      });
      res.cookie("refresh-token", refreshToken, {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * parseInt(jwtUtil.refreshTokenLife),
      });

      res
        .status(200)
        .send(ResponseUtil.successTrue(user, "로그인에 성공했습니다."));
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async refreshAccessToken(req: Request, res: Response) {
    const jwtUtil = new JWTUtil();

    const usersModel = new UsersModel();
    const user = await usersModel.read("user_id", req.body.decoded.id);

    if (!user) {
      const error = jwtUtil.invalidTokenError;
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }

    const accessPayload: PayloadAccessToken = {
      id: user.user_id,
      issuer: "http://3.18.72.134/",
    };

    try {
      const accessToken = jwtUtil.sign(accessPayload, "access");

      res.cookie("access-token", accessToken, {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * parseInt(jwtUtil.accessTokenLife),
      });

      res.status(200).send(ResponseUtil.successTrue({}));
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async logout(req: Request, res: Response) {
    res.cookie("access-token", "", {
      secure: false,
      httpOnly: true,
      maxAge: 0,
    });

    res.cookie("refresh-token", "", {
      secure: false,
      httpOnly: true,
      maxAge: 0,
    });

    res.status(200).send(ResponseUtil.successTrue({}));
  }
}
