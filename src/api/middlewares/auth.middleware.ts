import { Request, Response, NextFunction, request } from "express";
import Ajv, { DefinedError } from "ajv";
import addFormat from "ajv-formats";
import passport from "passport";

import { ErrorUtil } from "../utils/error.util";
import { ResponseUtil } from "../utils/response.util";
import JWTUtil from "../utils/jwt.util";

export class AuthMiddleware {
  private ajv: Ajv;

  constructor() {
    this.ajv = new Ajv();
    addFormat(this.ajv);
  }

  verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const path = req.route.path;
    const type = path == "/api/v1/auth/access-token" ? "refresh" : "access";
    const token: string = req.cookies[`${type}-token`];

    if (!token) {
      const error = ErrorUtil.unAuthorized(
        `${type} token is required.`,
        "로그인이 필요합니다."
      );
      res.status(error.status).send(ResponseUtil.successFalse(error));
      return;
    }

    const jwtUtil = new JWTUtil();
    const verifyResult = jwtUtil.verifyToken(token, type);

    if (!verifyResult.success) {
      res
        .status(verifyResult.err.status)
        .send(ResponseUtil.successFalse(verifyResult.err));
    } else {
      req.body.decoded = verifyResult.decoded;
      next();
    }
  };

  verifyUserByLocalPassport = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    passport.authenticate("local", (err, user, info) => {
      try {
        if (err) {
          throw ErrorUtil.internal("an error occurs : local passport");
        }
        if (!user) {
          throw ErrorUtil.unAuthorized(
            `User's informations are wrong.`,
            "아이디와 비밀번호를 확인해주세요."
          );
        }

        // req.logIn(user, (err) => {
        //   if (err) {
        //     return next(err);
        //   }
        //   return next();
        // });

        return next();
      } catch (err) {
        return res.status(err.status).send(ResponseUtil.successFalse(err));
      }
    })(req, res, next);
  };

  static blockCSRF = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const cookieValue = req.cookies["csrf-token"];
    const headerValue = req.headers["x-csrf-token"];

    if (cookieValue && headerValue && cookieValue === headerValue) {
      next();
    } else {
      const error = ErrorUtil.forbidden(
        "403-1",
        "Forbidden: suspected CSRF attack "
      );
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };
}
