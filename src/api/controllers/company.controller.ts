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
      result: {},
    });
  };

  getAllData = async (req: Request, res: Response) => {
    const data: ICompany = await this.companyModel.read("");

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
    console.log("test: ", req.params);
    const data: ICompany = await this.companyModel.read(req.body.category);
    console.log(data[0]._id, " ", typeof data[0]._id);
    if (data) {
      res.status(200).send({
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
}
