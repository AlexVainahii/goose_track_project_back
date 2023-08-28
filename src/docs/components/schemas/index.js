const User = require("./User");
const Task = require("./Task");
const Review = require("./Review");
const SuccessResponse = require("./SuccessResponse");
module.exports = {
  schemas: {
    ...User,
    ...Task,
    ...Review,
    ...SuccessResponse,
  },
};
