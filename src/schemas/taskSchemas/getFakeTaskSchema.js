const Joi = require("joi");
const { monthRegexp, validateStartEndMonth } = require("@helpers");

const getFakeTaskSchema = Joi.object({
  countTasks: Joi.number(),

  startMonth: Joi.string()
    .pattern(monthRegexp)
    .error(() => new Error("startMonth")),

  endMonth: Joi.string()
    .pattern(monthRegexp)
    .error(() => new Error("endMonth")),
})
  .custom(validateStartEndMonth)
  .messages({
    "any.invalid": `end Month must be bigger than start time`,
  });

module.exports = { getFakeTaskSchema };
