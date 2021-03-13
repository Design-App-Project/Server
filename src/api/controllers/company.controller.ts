import { Request, Response } from "express";
import { CompanyModel, ICompany } from "../models/company.model";

export class CompanyController {
  private companyModel: CompanyModel;
  constructor() {
    this.companyModel = new CompanyModel();
  }

  createCompany = async (req: Request, res: Response) => {
    await this.companyModel.create(req.body);

    res.status(200).send({
      success: true,
      message: "",
      results: {},
    });
  };

  getAllData = async (req: Request, res: Response) => {
    const data: ICompany = await this.companyModel.readAllData("");

    if (data) {
      res.status(200).json({
        success: true,
        result: data,
      });
    } else {
      res.status(404).send({
        success: false,
        messgae: "Not found",
        result: null,
      });
    }
  };

  getFilteredData = async (req: Request, res: Response) => {
    const data: ICompany = await this.companyModel.readFilteredData(req.body);
    if (data[0]) {
      res.status(200).send({
        success: true,
        result: data,
      });
    } else {
      res.status(404).send({
        success: false,
        messgae: "Not found",
        result: null,
        errors: false,
      });
    }
  };
}
