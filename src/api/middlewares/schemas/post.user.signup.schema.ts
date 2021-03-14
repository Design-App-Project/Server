export const PostUserSignupSchema = {
  type: "object",
  properties: {
    user_id: {
      type: "string",
      pattern: "^[a-z|A-Z|0-9]{1,}",
    },
    pwd: {
      type: "string",
      minLength: 8,
      pattern: "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{8,}.$",
    },
  },
  required: ["user_id", "pwd"],
  additionalProperties: true,
};
