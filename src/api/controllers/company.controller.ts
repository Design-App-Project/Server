import { Request, Response } from "express";
import { CompanyModel, ICompany, Company } from "../models/company.model";
import { IQuestion, Question } from "../models/question.model";
import { IUser, Users } from "../models/users.model";
import { ErrorUtil } from "../utils/error.util";
import { ResponseUtil } from "../utils/response.util";
import path from "path";

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
    const value = {
      id: req.body.decoded.id,
      img_path: req.files,
      title: req.body.title,
      address: req.body.address,
      telephone: req.body.telephone,
      sample_imgs: req.files,
      likes: 0,
      tag: req.body.tag,
      category: req.body.category,
      open: req.body.open,
    };
    const company: any = new Company(value);
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
  getAllQuestions = async (req: Request, res: Response) => {
    const data: IQuestion = await Question.find();
    if (data) {
      res.status(200).send(ResponseUtil.successTrue(data, ""));
    } else {
      const error = ErrorUtil.badRequest(``, `등록된 문의내역이 없습니다.`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  //회원 정보 불러오기
  getAllUserInfo = async (req: Request, res: Response) => {
    const data: IUser = await Users.find().populate("bookmark");
    if (data) {
      res.status(200).send(ResponseUtil.successTrue(data, ""));
    } else {
      const error = ErrorUtil.badRequest(``, `등록된 회원이 없습니다.`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  deleteUserInfo = async (req: Request, res: Response) => {
    const data: IUser = await Users.findOneAndDelete({
      user_id: req.body.user_id,
    });
    if (data) {
      res
        .status(200)
        .send(ResponseUtil.successTrue({}, "회원 탈퇴 하였습니다."));
    } else {
      const error = ErrorUtil.badRequest(``, `존재하지 않는 아이디 입니다.`);
      res.status(error.status).send(ResponseUtil.successFalse(error));
    }
  };

  async getSignBoard(req: Request, res: Response) {
    const filename = req.params.filename
    const PATH = path.join(__dirname,'../../../company_imgs/signboard',filename)
    res.setHeader('Content-Type','application/octet-stream; charset=utf-8',);
    res.setHeader('Content-Disposition','attachment; filename='+encodeURIComponent(filename));
    res.sendFile(PATH)
  }

  async getSampleImgs(req: Request, res: Response) {
    const filename = req.params.filename
    const PATH = path.join(__dirname,'../../../company_imgs/sample',filename)
    res.setHeader('Content-Type','application/octet-stream; charset=utf-8',);
    res.setHeader('Content-Disposition','attachment; filename='+encodeURIComponent(filename));
    res.sendFile(PATH)
  }
}
