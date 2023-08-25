module.exports = {
  User: {
    type: "object",
    required: ["userName", "email", "password"],
    properties: {
      _id: {
        type: "string",
        description: "Backend-generated unique identifier.",
        example: "63fa1eb8ed1b46fa6fd8e857",
      },
      userName: {
        type: "string",
        description: "User's name",
        example: "Stepan Bandera",
      },
      email: {
        type: "string",
        description: "User's email",
        example: "stepan@gmail.com",
      },
      avatarURL: {
        type: "string",
        description: "User's avatar URL",
        example:
          "https://s.gravatar.com/avatar/068de491621f7023bb5f8b3d473f50a3?s=250",
      },
      phone: {
        type: "string",
        description: "User's phone",
        example: "(000) 000-0000",
      },
      skype: {
        type: "string",
        description: "User's  skype",
        example: "(000) 000-0000",
      },
      birthDay: {
        type: "string",
        description: "User's  birthDay",
        example: "11/11/1995",
      },
    },
  },
};
