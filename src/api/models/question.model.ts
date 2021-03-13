import mongoose from "mongoose";

export interface IQuestion extends mongoose.Document {
  user_id: string;
  text: string;
  file: FormData;
}

export class QuestionModel {
  constructor() {}

  //   async create(fields: any) {
  //     const company: any = new Company(fields);
  //     return await company.save();
  //   }

  //   async readAllData(fields: any) {
  //     return await Company.find();
  //   }

  //   async readFilteredData(fields: any) {
  //     if (fields.category[0] === undefined) {
  //       return await Company.find();
  //     } else {
  //       let companyList: object[] = [];

  //       for (let item in fields) {
  //         let a = await Company.find({ category: fields[item] });

  //         for (let item in a) {
  //           companyList.push(a[item]);
  //         }
  //       }
  //       return companyList;
  //     }
  //   }

  //   async update(fields: any) {
  //     const company: any = new Company(fields);
  //     return await company.save();
  //   }
}

const schema: mongoose.Schema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  text: {
    type: String,
  },
  file: {
    type: Object,
  },
});

export const Question: mongoose.Model<IQuestion> = mongoose.model<IQuestion>(
  "Question",
  schema
);
