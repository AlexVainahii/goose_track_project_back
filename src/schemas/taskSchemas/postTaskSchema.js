const Joi = require("joi");
const { timeRegexp, dateRegexp } = require("../regexp");

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
  category: Joi.string().default("TODO").valid("TODO", "INPROGRESS", "DONE"),
});

module.exports = { postTaskSchema };
