export const PostUserSignupSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      pattern: "^[a-z|A-Z|0-9]{1,}",
    },
    pwd: {
      type: "string",
      minLength: 8,
      pattern: "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{8,}.$",
    },
  },
  required: ["id", "pwd"],
  additionalProperties: true,
};
