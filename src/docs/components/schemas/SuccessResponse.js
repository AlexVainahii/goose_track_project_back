module.exports = {
  SuccessResponse: {
    type: "object",
    oneOf: [
      {
        properties: {
          code: {
            type: "integer",
            description: "Server response status code",
            example: 200,
          },
          message: {
            type: "string",
            description: "Server response message",
            example: "success",
          },
        },
      },
      {},
    ],
  },
};
