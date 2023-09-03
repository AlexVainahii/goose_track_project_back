const Joi = require("joi");
const { timeRegexp, dateRegexp } = require("@helpers");

const validateStartEndTime = (obj, helpers) => {
  function toMinute(time) {
    const arrTime = time.split(":");
    return Number(arrTime[0]) * 60 + Number(arrTime[1]);
  }
  const { start, end } = obj;

  if (toMinute(start) >= toMinute(end)) {
    return helpers.error("any.invalid");
  }
};

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
    .pattern(timeRegexp),
    // .error(() => new Error("end")),
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
      "any.invalid": `The following condition must be met start<end`,
    });

module.exports = { postTaskSchema };
