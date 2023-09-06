const {
  registerSchema,
  emailSchema,
  loginSchema,
  updateSchema,
  passSchema,
} = require("./authSchemas");

const {
  getMonthTasksSchema,
  patchTaskSchema,
  postTaskSchema,
  getFakeTaskSchema,
} = require("./taskSchemas");
const { postReviewSchema, patchReviewSchema } = require("./reviewSchemas");
const schemas = {
  registerSchema,
  emailSchema,
  loginSchema,
  updateSchema,
  passSchema,
  getMonthTasksSchema,
  patchTaskSchema,
  postTaskSchema,
  postReviewSchema,
  patchReviewSchema,
  getFakeTaskSchema,
};
module.exports = { schemas };
