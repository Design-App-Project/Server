export const AuthSchema = {
  PostSigninSchema: {
    type: "object",
    properties: {
      user_id: {
        type: "string",
      },
      pwd: {
        type: "string",
      },
    },
    required: ["user_id", "pwd"],
    additionalProperties: false,
  },
};

export const AuthSchemaMapper = {
  "/api/v1/auth/signin": {
    POST: AuthSchema.PostSigninSchema,
  },
};
