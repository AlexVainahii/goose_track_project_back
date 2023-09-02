module.exports = {
  get: {
    tags: ["Auth"],
    summary: "Change Password",
    description: "This route changes the user's password.",
    operationId: "changePassword",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: "In example of a request object for change password user's",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["oldPassword", "password"],
            properties: {
              oldPassword: {
                type: "string",
                description: "old password",
                example: "sanjaksms@gmail.com",
              },
              password: {
                type: "string",
                description: "new password",
                example: "sanjaksms@gmail.com",
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Change Password",
          content: {
            "application/json": {
              example: {
                code: 200,
                message: "Change password success",
                email: {
                  type: "string",
                  description: "email is verification",
                  example: "sanjaksms@gmail.com",
                },
              },
            },
          },
        },
        400: {
          description: "Bad request (invalid request body)",
        },
        401: {
          description: "Not authorized",
        },
        500: {
          description: "Server error",
        },
      },
    },
  },
};
