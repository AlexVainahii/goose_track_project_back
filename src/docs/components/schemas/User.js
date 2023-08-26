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
        example: "//www.gravatar.com/avatar/0a08d09dddb03a5f849d318113397e40",
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
      verify: {
        type: "boolean",
        description: "Is verify email",
        example: true,
      },
      verificationToken: {
        type: "string",
        description: "Is verificationToken in email",
        example: "80e09a28-0891-4c00-8e1e-ecb3392c6647",
      },
      token: {
        type: "string",
        description: "Backend-generated unique json web token",
        example: "adsjkasnxz.csdcdfgdvgfhgfdcs.saxsa",
      },
      createdAt: {
        type: "string",
        description: "Data&Time create User",
        example: "2023-08-25T18:01:01.709Z",
      },
      updatedAt: {
        type: "string",
        description: "Data&Time update User",
        example: "2023-08-25T23:33:49.514Z",
      },
    },
  },
};
