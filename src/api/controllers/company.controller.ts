import { Request, Response } from "express";
import { CompanyModel, ICompany } from "../models/company.model";

export class CompanyController {
  constructor() {}

  createCompany = async (req: Request, res: Response) => {
    const companyModel = new CompanyModel();
    await companyModel.create(req.body);

    res.status(200).send({
      success: true,
      message: "",
      result: {},
    });
  };

  getAllData = async (req: Request, res: Response) => {
    const companyModel = new CompanyModel();

    const data: ICompany = await companyModel.read();

    // console.log(Object.keys(data).length);
    try {
      if (data) {
        res.status(200).json({
          success: true,
          result: data,
        });
      }
    } catch (err) {
      res.status(404).send({
        success: false,
        messgae: "Not found",
        result: null,
      });
    }
  };
}
