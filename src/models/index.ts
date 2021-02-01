import * as mongoose from "mongoose";

export class Models {
  options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  constructor() {}

  init() {
    this.connect();
  }

  getMongoose() {
    return mongoose;
  }

  connect() {
    mongoose
      .connect("mongodb://localhost:27017/test-db", this.options)
      .then(() => {
        console.log("MongoDB is connected");
      })
      .catch((err) => {
        console.log("MongoDB connection unsuccessful");
      });
  }
}
