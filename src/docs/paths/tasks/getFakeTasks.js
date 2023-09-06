module.exports = {
  post: {
    tags: ["Tasks"],
    summary: "Set Fake Tasks",
    description: "This route set the user Fake Tasks in period",
    operationId: "setFakeTasks",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description:
        "In example of a request object for sending a request to set fake tasks to the user's",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["count", "startMonth", "endMonth"],
            properties: {
              countTasks: {
                type: "number",
                description: "count fake tasks",
                example: 200,
              },
              startMonth: {
                type: "string",
                description: " startMonth in period",
                example: "2023-08",
              },
              endMonth: {
                type: "string",
                description: "endMonth in period",
                example: "2023-09",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Success set fake tasks in User",
        content: {
          "application/json": {
            example: {
              code: 200,
              message: "Success set fake tasks in User",
            },
          },
        },
      },
      400: {
        description: "Bad request (invalid request body)",
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
