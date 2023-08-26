const Joi = require("joi");
const { timeRegexp, dateRegexp } = require("../regexp");

const postTaskSchema = Joi.object({
  title: Joi.string().required().max(250),
  start: Joi.string().required().pattern(timeRegexp),
  end: Joi.string().required().pattern(timeRegexp),
  priority: Joi.string(),
  date: Joi.string().required().pattern(dateRegexp),
  category: Joi.string(),
});

module.exports = { postTaskSchema };
