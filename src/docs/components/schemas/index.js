const User = require("./User");
const Task = require("./Task");
const Review = require("./Review");
const updateUser = require("./updateUserTdo");
module.exports = {
  schemas: {
    ...User,
    ...Task,
    ...Review,
    ...updateUser,
  },
};
