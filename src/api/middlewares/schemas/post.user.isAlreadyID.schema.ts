export const PostUserIsAlreadyIDSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
  },
  required: ["id"],
  additionalProperties: true,
};
