import { Request, Response } from "express";
import { CompanyModel, ICompany, Company } from "../models/company.model";
import { IQuestion, Question } from "../models/question.model";
import { ErrorUtil } from "../utils/error.util";
import { ResponseUtil } from "../utils/response.util";

export class AdminController {
  private companyModel: CompanyModel;
  constructor() {
    this.companyModel = new CompanyModel();
  }

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

  // 문의내역 불러오기
  getQuestions = async (req: Request, res: Response) => {
    const question: any = new Question();
    const data = await question.find();

    console.log("data:", data);
    res.status(200).send(ResponseUtil.successTrue({}, ""));
  };
}
