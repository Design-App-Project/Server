import { Request, Response, NextFunction } from "express";
import Ajv, { DefinedError } from "ajv";
import addFormat from "ajv-formats";

import { AuthSchemaMapper } from "./schemas/auth.middleware.schema";
import { ErrorUtil } from "../utils/error.util";
import { ResponseUtil } from "../utils/response.util";

export class ValidateMiddleware {
  private ajv: Ajv;

  constructor() {
    this.ajv = new Ajv();
    addFormat(this.ajv);
  }
  authRoute = async (req: Request, res: Response, next: NextFunction) => {
    const validate = this.ajv.compile(AuthSchemaMapper[req.path][req.method]);
    if (!validate(req.body)) {
      const error = (validate.errors as DefinedError[])[0];
      const errorUtil = ErrorUtil.ajv(error);
      res.status(errorUtil.status).send(ResponseUtil.successFalse(errorUtil));
      return;
    }

    next();
  };
}
