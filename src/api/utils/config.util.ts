import { TypeUtil } from "./type.util";

const cast = TypeUtil.cast;
export const config = {
  PORT: cast("PORT", "number", 3000),
  MONGODB_AUTH_USERNAME: cast("MONGODB_AUTH_USERNAME", "string", ""),
  MONGODB_AUTH_PASSWORD: cast("MONGODB_AUTH_PASSWORD", "string", ""),
  MONGODB_HOST: cast("MONGODB_HOST", "string", ""),
  MONGODB_PORT: cast("MONGODB_PORT", "string", ""),
  MONGODB_DBNAME: cast("MONGODB_DBNAME", "string", ""),
  MONGODB_OPTIONS: cast("MONGODB_OPTIONS", "string", ""),
};
