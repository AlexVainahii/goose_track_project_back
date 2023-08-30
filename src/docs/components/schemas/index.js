const User = require("./User");
const Task = require("./Task");
const Review = require("./Review");
module.exports = {
  schemas: {
    ...User,
    ...Task,
    ...Review,
  },
};
