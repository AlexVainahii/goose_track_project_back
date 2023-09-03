module.exports = {
  get: {
    tags: ["Auth"],
    summary: "Verify user email",
    description: "This route verify user email",
    operationId: "verifyEmail",
    parameters: [
      {
        $ref: "#/components/parameters/verificationToken",
      },
    ],
    responses: {
      200: {
        description: "The user is logged out",
        content: {
          "application/json": {
            example: {
              code: 200,
              message: "Verification successful",
              email: { type: "string", example: "stepan@gmail.com" },
              token: {
                type: "string",
                example: "adsjkasnxz.csdcdfgdvgfhgfdcs.saxsa",
              },
            },
          },
        },
      },
      404: {
        description: "User not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
