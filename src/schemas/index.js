const {
  registerSchema,
  emailSchema,
  loginSchema,
  updateSchema,
} = require("./authSchemas");

const {
  getMonthTasksSchema,
  patchTaskSchema,
  postTaskSchema,
} = require("./taskSchemas");
const { postReviewSchema, patchReviewSchema } = require("./reviewSchemas");
const schemas = {
  registerSchema,
  emailSchema,
  loginSchema,
  updateSchema,
  getMonthTasksSchema,
  patchTaskSchema,
  postTaskSchema,
  postReviewSchema,
  patchReviewSchema,
};
module.exports = { schemas };
