export default {
  PostAuthSigninSchema: {
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
