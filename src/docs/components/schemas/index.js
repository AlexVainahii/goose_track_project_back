const User = require("./User");
const SuccessResponse = require("./SuccessResponse");
module.exports = {
  schema: {
    ...User,
    ...SuccessResponse,
  },
};
