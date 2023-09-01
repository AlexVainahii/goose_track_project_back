module.exports = {
  verificationTokenparam: {
    in: "path",
    name: "verificationToken",
    description: "verificationToken in email",
    required: true,
    example: "98234082-3123-324234-1234143",
    schema: {
      type: "string",
    },
  },
};
