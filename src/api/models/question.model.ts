import mongoose from "mongoose";

export interface IQuestion extends mongoose.Document {
  user_id: string;
  text: string;
  file: object;
}

export class QuestionModel {
  constructor() {}
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
