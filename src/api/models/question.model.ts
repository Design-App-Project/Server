import mongoose from "mongoose";

export interface IQuestion extends mongoose.Document {
  date: Date;
  user_id: string;
  text: string;
  file: object;
  email: string;
  title: string;
}

export class QuestionModel {
  constructor() {}
}

const schema: mongoose.Schema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: String,
  },
  text: {
    type: String,
  },
  file: {
    type: Object,
  },
  email: {
    type: String,
  },
  title: {
    type: String,
  },
});

export const Question: mongoose.Model<IQuestion> = mongoose.model<IQuestion>(
  "Question",
  schema
);
