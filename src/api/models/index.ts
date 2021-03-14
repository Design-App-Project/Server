import mongoose from "mongoose";

import { config } from "../utils/config.util";

export class Models {
  private username: string;
  private password: string;
  private host: string;
  private port: number;
  private dbname: string;
  private options: string;

  private connectOptions: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  constructor() {
    this.username = config.MONGODB_AUTH_USERNAME;
    this.password = config.MONGODB_AUTH_PASSWORD;
    this.host = config.MONGODB_HOST;
    this.port = config.MONGODB_PORT;
    this.dbname = config.MONGODB_DBNAME;
    this.options = config.MONGODB_OPTIONS ? "?" + config.MONGODB_OPTIONS : "";
  }

  init() {
    this.connect();
  }

  getMongoose() {
    return mongoose;
  }

  connect() {
    mongoose
      .connect(
        `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.dbname}${this.options}`,
        this.connectOptions
      )
      .then(() => {
        console.log("MongoDB is connected");
      })
      .catch((err) => {
        console.log("MongoDB connection unsuccessful");
        console.table(this);
      });
  }
}
