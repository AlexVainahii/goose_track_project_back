module.exports = {
  get: {
    tags: ["Tasks"],
    summary: "Get all user tasks for current month",
    description: "Get all user tasks for current month",
    operationId: "getMonthTask",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description:
        "An example of a request object for Get all user tasks for current month",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["date"],
            properties: {
              date: {
                type: "string",
                description: "current date",
                example: "2023-09",
                pattern: "^20dd-(0[1-9]|1[012])$",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "get all tasks for current month",
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
                      type: "number",
                      example: 200,
                    },
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          _id: {
                            type: "ObjectId",
                            example: "64e9e9baa80ec244444c5cc5",
                          },
                          title: {
                            type: "string",
                            example: "Some task",
                          },
                          start: {
                            type: "string",
                            example: "13:13",
                          },
                          end: {
                            type: "string",
                            example: "14:14",
                          },
                          priority: {
                            type: "string",
                            example: "MEDIUM",
                          },
                          date: {
                            type: "string",
                            example: "2023-09-01",
                          },
                          category: {
                            type: "string",
                            example: "TODO",
                          },
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
      400: {
        description: "missing required fields",
      },
      401: {
        description: "Not authorization",
      },
      500: {
        description: "Server error",
      },
    },
  },
};