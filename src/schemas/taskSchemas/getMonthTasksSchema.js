const { monthRegexp } = require("@helpers");
const Joi = require("joi");

const getMonthTasksSchema = Joi.object({
  date: Joi.string()
    .required()
    .regex(monthRegexp)
    .error(() => new Error("date")),
});

module.exports = { getMonthTasksSchema };
