export const AuthSchema = {
  PostSigninSchema: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      pwd: {
        type: "string",
      },
    },
    required: ["id", "pwd"],
    additionalProperties: false,
  },
};

export const AuthSchemaMapper = {
  "/api/v1/auth/signin": {
    POST: AuthSchema.PostSigninSchema,
  },
};
