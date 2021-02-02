import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

switch (NODE_ENV) {
  case "production":
    dotenv.config({ path: resolve(__dirname, "../.env") });
    break;
  default:
    dotenv.config({ path: resolve(__dirname, "../.env.development") });
}
