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

  // **관리자 페이지 API** //

  // 업체 추가 api
  addCompany = async (req: Request, res: Response) => {
    await this.companyModel.create(req.body);

    res.status(200).send(ResponseUtil.successTrue({}, ""));
  };

  // 업체 삭제 api
  removeCompany = async (req: Request, res: Response) => {
    const company: ICompany = await Company.findOneAndDelete({
      title: req.body.title,
    });

    if (company) {
      res
        .status(200)
        .send(ResponseUtil.successTrue({}, "삭제가 완료되었습니다."));
    } else {
      const error = ErrorUtil.badRequest(``, `미등록된 업체입니다.`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };
}
