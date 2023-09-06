const { getMonthTasksSchema } = require("./getMonthTasksSchema");
const { patchTaskSchema } = require("./patchTaskSchema");
const { postTaskSchema } = require("./postTaskSchema");
const { getFakeTaskSchema } = require("./getFakeTAskSchema");
module.exports = {
  getMonthTasksSchema,
  patchTaskSchema,
  postTaskSchema,
  getFakeTaskSchema,
};
