const {
  phoneRegexp,
  emailRegexp,
  timeRegexp,
  dateRegexp,
} = require("./regexp");
const { registerSchema } = require("./registerSchema");
const { emailSchema } = require("./emailSchema");
const { loginSchema } = require("./loginSchema");
const { updateSchema } = require("./updateSchema");
const {
  getMonthTasksSchema,
  patchTaskSchema,
  postTaskSchema,
} = require("./taskSchemas");
const { postReviewSchema, patchReviewSchema } = require("./reviewSchemas");
const schemas = {
  phoneRegexp,
  emailRegexp,
  timeRegexp,
  dateRegexp,
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
