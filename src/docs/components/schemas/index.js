const User = require("./User");
const Task = require("./Task");
const Review = require("./Review");
const updateUser = require("./updateUser");
module.exports = {
  schemas: {
    ...User,
    ...Task,
    ...Review,
    ...updateUser,
  },
};
