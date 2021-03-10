import { config } from "./config.util";
import * as jwt from "jsonwebtoken";
import { ErrorUtil } from "./error.util";

export type PayloadAccessToken = {
  id: string;
  issuer: "http://3.18.72.134/";
};

export type PayloadRefreshToken = {
  id: string;
  issuer: "http://3.18.72.134/";
};

export type Payload = PayloadAccessToken | PayloadRefreshToken;

type VerifyFail = {
  success: false;
  err: ErrorUtil;
};

type VerifySuccess = {
  success: true;
  decoded: Payload;
};

type VerifyResult = VerifySuccess | VerifyFail;
type TokenType = "refresh" | "access";

export default class JWTUtil {
  private _ACCESS_TOKEN_SECRET: string;
  private _ACCESS_TOKEN_LIFE: string;
  private _REFRESH_TOKEN_SECRET: string;
  private _REFRESH_TOKEN_LIFE: string;

  constructor() {
    this._ACCESS_TOKEN_SECRET = config.ACCESS_TOKEN_SECRET;
    this._ACCESS_TOKEN_LIFE = config.ACCESS_TOKEN_LIFE;
    this._REFRESH_TOKEN_SECRET = config.REFRESH_TOKEN_SECRET;
    this._REFRESH_TOKEN_LIFE = config.REFRESH_TOKEN_LIFE;
  }

  get accessTokenSecret(): string {
    return this._ACCESS_TOKEN_SECRET;
  }

  get accessTokenLife(): string {
    return this._ACCESS_TOKEN_LIFE;
  }

  get refreshTokenSecret(): string {
    return this._REFRESH_TOKEN_SECRET;
  }

  get refreshTokenLife(): string {
    return this._REFRESH_TOKEN_LIFE;
  }

  get tokenExpiredError(): ErrorUtil {
    return ErrorUtil.unAuthorized("Token is expired.", "로그인이 필요합니다.");
  }

  get invalidTokenError(): ErrorUtil {
    return ErrorUtil.unAuthorized(
      "It is invalid token.",
      "로그인이 필요합니다."
    );
  }

  public verifyToken = (token: string, type: TokenType): VerifyResult => {
    const secret =
      type == "access" ? this._ACCESS_TOKEN_SECRET : this._REFRESH_TOKEN_SECRET;

    let result: VerifyResult = {
      success: false,
      err: this.invalidTokenError,
    };

    jwt.verify(
      token,
      secret,
      (err: jwt.VerifyErrors | null, decoded: Payload | undefined) => {
        if (err) {
          result = {
            success: false,
            err: this.getErrorUtil(err),
          };
        } else if (!decoded) {
          result = {
            success: false,
            err: this.getErrorUtil(new jwt.JsonWebTokenError("")),
          };
        } else {
          result = {
            success: true,
            decoded,
          };
        }
      }
    );

    return result;
  };

  public sign = (
    payload: Payload,
    type: TokenType,
    options: jwt.SignOptions = {}
  ): string => {
    const secret =
      type == "access" ? this._ACCESS_TOKEN_SECRET : this._REFRESH_TOKEN_SECRET;

    const expiresIn =
      type == "access" ? this._ACCESS_TOKEN_LIFE : this._REFRESH_TOKEN_LIFE;

    return jwt.sign(payload, secret, {
      ...options,
      expiresIn,
    });
  };
  private getErrorUtil = (error: jwt.VerifyErrors): ErrorUtil => {
    switch (error.name) {
      case "TokenExpiredError":
        return this.tokenExpiredError;

      default:
        return this.invalidTokenError;
    }
  };
}
