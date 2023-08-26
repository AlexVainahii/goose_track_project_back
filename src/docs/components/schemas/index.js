const User = require("./User");
const SuccessResponse = require("./SuccessResponse");
module.exports = {
  schemas: {
    ...User,
    ...SuccessResponse,
  },
};
