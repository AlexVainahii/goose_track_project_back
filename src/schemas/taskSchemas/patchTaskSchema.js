const Joi = require("joi");
const { timeRegexp, dateRegexp } = require("../regexp");

const patchTaskSchema = Joi.object({
  title: Joi.string().max(250),
  start: Joi.string().pattern(timeRegexp),
  end: Joi.string().pattern(timeRegexp),
  priority: Joi.string(),
  date: Joi.string().pattern(dateRegexp),
  category: Joi.string(),
});

module.exports = { patchTaskSchema };
