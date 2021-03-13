import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  id: string;
  pwd: string;
}

type UserKey = "id";

export class UsersModel {
  constructor() {}

  async create(fields: any) {
    const user: any = new Users(fields);
    console.log(user);
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
});

export const Users: mongoose.Model<IUser> = mongoose.model<IUser>(
  "User",
  schema
);
