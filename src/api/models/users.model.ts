import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  user_id: string;
  pwd: string;
  bookmark: [string];
  selected: boolean;
  name: string;
  introduce: string;
  interest: string;
}

type UserKey = "id";

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
  user_id: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  bookmark: {
    type: [String],
    required: false,
  },
  selected: {
    type: Boolean,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  introduce: {
    type: String,
    required: false,
  },
  interest: {
    type: String,
    required: false,
  },
  salt: {
    type: String,
    default: "",
  },
});

export const Users: mongoose.Model<IUser> = mongoose.model<IUser>(
  "User",
  schema
);
