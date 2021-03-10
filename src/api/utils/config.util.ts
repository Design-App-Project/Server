import { TypeUtil } from "./type.util";

const cast = TypeUtil.cast;
export const config = {
  PORT: cast("PORT", "number", 3000),
  ACCESS_TOKEN_SECRET: cast("ACCESS_TOKEN_SECRET", "string", ""),
  ACCESS_TOKEN_LIFE: cast("ACCESS_TOKEN_LIFE", "number", 0),
  MONGODB_AUTH_USERNAME: cast("MONGODB_AUTH_USERNAME", "string", ""),
  MONGODB_AUTH_PASSWORD: cast("MONGODB_AUTH_PASSWORD", "string", ""),
  MONGODB_HOST: cast("MONGODB_HOST", "string", ""),
  MONGODB_PORT: cast("MONGODB_PORT", "string", ""),
  MONGODB_DBNAME: cast("MONGODB_DBNAME", "string", ""),
  MONGODB_OPTIONS: cast("MONGODB_OPTIONS", "string", ""),
  REFRESH_TOKEN_SECRET: cast("REFRESH_TOKEN_SECRET", "string", ""),
  REFRESH_TOKEN_LIFE: cast("REFRESH_TOKEN_LIFE", "number", 0),
  SESSION_SECRET: cast("SESSION_SECRET", "string", ""),
};
