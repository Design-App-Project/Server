import { Request, Response } from "express";
import { CompanyModel, ICompany, Company } from "../models/company.model";
import { ErrorUtil } from "../utils/error.util";
import { ResponseUtil } from "../utils/response.util";

export class CompanyController {
  private companyModel: CompanyModel;
  constructor() {
    this.companyModel = new CompanyModel();
  }

  getAllData = async (req: Request, res: Response) => {
    const data: ICompany = await this.companyModel.readAllData("");

    if (data) {
      res.status(200).send(ResponseUtil.successTrue(data, ""));
    } else {
      const error = ErrorUtil.badRequest(``, `Not found`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  getFilteredData = async (req: Request, res: Response) => {
    const data: ICompany = await this.companyModel.readFilteredData(req.body);
    if (data[0]) {
      res.status(200).send(ResponseUtil.successTrue(data, ""));
    } else {
      const error = ErrorUtil.badRequest(``, `Not found`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };
}
