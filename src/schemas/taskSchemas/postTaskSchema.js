const Joi = require("joi");
const { timeRegexp, dateRegexp, validateStartEndTime } = require("@helpers");

const postTaskSchema = Joi.object({
  title: Joi.string()
    .required()
    .max(250)
    .error(() => new Error("title")),
  start: Joi.string()
    .required()
    .pattern(timeRegexp)
    .error(() => new Error("start")),
  end: Joi.string()
    .required()
    .pattern(timeRegexp)
    .error(() => new Error("end")),
  priority: Joi.string().default("LOW").valid("LOW", "MEDIUM", "HIGH"),
  date: Joi.string()
    .required()
    .pattern(dateRegexp)
    .error(() => new Error("date")),
  category: Joi.string()
    .default("TODO")
    .valid("TODO", "INPROGRESS", "DONE")
}).custom(validateStartEndTime)
    .messages({
      "any.invalid": `end time must be bigger than start time`,
    });

module.exports = { postTaskSchema };
