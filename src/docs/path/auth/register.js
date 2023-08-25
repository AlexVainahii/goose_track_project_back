module.exports = {
  post: {
    tags: ["Auth"],
    summary: "Register a new user",
    description: "This route registers the user",
    operationId: "register",
    requestBody: {
      description: "An example of a request object for creating a new user",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["name", "email", "password"],
            properties: {
              Username: {
                type: "string",
                description: "Username",
                example: "Stepan Bandera",
              },
              email: {
                type: "string",
                description: "E-mail address",
                example: "stepan@gmail.com",
              },
              password: {
                type: "string",
                description: "Password",
                example: "asd23asd12",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "Registration success",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                {
                  $ref: "#/components/schemas/SuccessResponse",
                },
                {
                  properties: {
                    code: {
                      example: 201,
                    },
                    data: {
                      $ref: "#/components/schemas/User",
                    },
                    token: {
                      type: "string",
                      description: "Backend-generated unique json web token",
                      example: "adsjkasnxz.csdcdfgdvgfhgfdcs.saxsa",
                    },
                  },
                },
              ],
            },
          },
        },
      },
      400: {
        description: "Bad request (invalid request body)",
      },
      409: {
        description: "Provided email already exists",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
