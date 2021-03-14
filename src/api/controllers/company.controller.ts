import { Request, Response } from "express";
import { CompanyModel, ICompany, Company } from "../models/company.model";
import { IQuestion, Question } from "../models/question.model";
import { IUser, Users } from "../models/users.model";
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

  // ** 관리자 페이지 API ** //

  // 업체 추가 api
  addCompany = async (req: Request, res: Response) => {
    const company: any = new Company(req.body);
    await company.save();
    res.status(200).send(ResponseUtil.successTrue({}, ""));
  };

  // 업체 삭제 api
  removeCompany = async (req: Request, res: Response) => {
    const data: ICompany = await Company.findOneAndDelete({
      title: req.body.title,
    });

    if (data) {
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
    const data: IQuestion = await Question.find();
    if (data) {
      res.status(200).send(ResponseUtil.successTrue(data, ""));
    } else {
      const error = ErrorUtil.badRequest(``, `등록된 문의내역이 없습니다.`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  //회원 정보 불러오기
  getUserInfo = async (req: Request, res: Response) => {
    const data: IUser = await Users.find();
    if (data) {
      res.status(200).send(ResponseUtil.successTrue(data, ""));
    } else {
      const error = ErrorUtil.badRequest(``, `등록된 회원이 없습니다.`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };
}
