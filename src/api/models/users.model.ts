import { request } from "express";
import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  id: string;
  pwd: string;
  bookmark: [string];
  selected: boolean;
  name: string;
  introduce: string;
  interest: string;
}

type UserKey = "nickname" | "email" | "id";

export class UsersModel {
  constructor() {}

  async create(fields: any) {
    const user: any = new Users(fields);
    return await user.save();
  }

  async read(
    key: UserKey,
    value: string | number | object,
    safe: boolean = true
  ) {
    const query = {};
    query[key] = value;

    if (safe) {
      return await Users.findOne(query).select("-pwd -salt");
    }
    return await Users.findOne(query);
  }
}

const schema: mongoose.Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    default: "",
  },
  bookmark: {
    type: [String],
  },
  selected: {
    type: Boolean,
  },
  name: {
    type: String,
    required: true,
  },
  introduce: {
    type: String,
  },
  interest: {
    type: String,
  },
});

export const Users: mongoose.Model<IUser> = mongoose.model<IUser>(
  "User",
  schema
);
