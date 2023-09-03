const Joi = require("joi");
const { timeRegexp, dateRegexp, validateStartEndTime } = require("@helpers");

const patchTaskSchema = Joi.object({
  title: Joi.string().max(250),
  start: Joi.string().pattern(timeRegexp),
  end: Joi.string().pattern(timeRegexp),
  priority: Joi.string(),
  date: Joi.string().pattern(dateRegexp),
  category: Joi.string(),
})
  .custom(validateStartEndTime)
  .messages({
    "any.invalid": `end time must be bigger than start time`,
  });

module.exports = { patchTaskSchema };
