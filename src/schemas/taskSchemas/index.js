const { getMonthTasksSchema } = require("./getMonthTasksSchema");
const { patchTaskSchema } = require("./patchTaskSchema");
const { postTaskSchema } = require("./postTaskSchema");
const { getFakeTaskSchema } = require("./getFakeTaskSchema");
module.exports = {
  getMonthTasksSchema,
  patchTaskSchema,
  postTaskSchema,
  getFakeTaskSchema,
};
