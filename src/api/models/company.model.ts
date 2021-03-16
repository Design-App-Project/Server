import mongoose from "mongoose";

export interface ICompany extends mongoose.Document {
  category: string;
  img_path: object;
  title: string;
  address: string;
  telephone: string;
  sample_imgs: [object];
  likes: number;
  tag: [string];
  open: [string];
}

export class CompanyModel {
  constructor() {}

  async create(fields: any) {
    const company: any = new Company(fields);
    return await company.save();
  }

  async readAllData(fields: any) {
    return await Company.find();
  }

  async readFilteredData(fields: any) {
    if (fields.category[0] === undefined) {
      return await Company.find();
    } else {
      let companyList: object[] = [];

      for (let item in fields) {
        let a = await Company.find({ category: fields[item] });

        for (let item in a) {
          companyList.push(a[item]);
        }
      }
      return companyList;
    }
  }

  async update(fields: any) {
    const company: any = new Company(fields);
    return await company.save();
  }
  async remove(fields: any) {
    return Company.findOneAndDelete({ title: fields });
  }
}

const schema: mongoose.Schema = new mongoose.Schema({
  category: {
    type: String,
  },
  img_path: {
    type: Object,
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
  sample_imgs: [
    {
      type: Object,
    },
  ],
  likes: {
    type: Number,
  },
  tag: {
    type: [String],
  },
  open: {
    type: [String],
  },
});

export const Company: mongoose.Model<ICompany> = mongoose.model<ICompany>(
  "Company",
  schema
);
