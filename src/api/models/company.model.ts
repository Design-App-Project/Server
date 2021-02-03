import mongoose from "mongoose";

export interface ICompany extends mongoose.Document {
  img_path: string;
  title: string;
  address: string;
  telephone: string;
  sample_imgs: [string];
  likes: number;
  tag: [string];
}

export class CompanyModel {
  constructor() {}

  async create(fields: any) {
    const company: any = new Company(fields);
    return await company.save();
  }

  async read() {
    return await Company.find();
  }
}

const schema: mongoose.Schema = new mongoose.Schema({
  img_path: {
    type: String,
  },
  title: {
    type: String,
  },
  address: {
    type: String,
  },
  telephone: {
    type: String,
  },
  sample_imgs: {
    type: [String],
  },
  likes: {
    type: Number,
  },
  tag: {
    type: [String],
  },
});

export const Company: mongoose.Model<ICompany> = mongoose.model<ICompany>(
  "Company",
  schema
);
