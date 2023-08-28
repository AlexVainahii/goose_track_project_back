const auth = require("./auth");
const tasks = require('./tasks');
const reviews = require('./reviews');

module.exports = {
  paths: {
    ...auth,
    ...tasks,
    ...reviews,
  },
};
