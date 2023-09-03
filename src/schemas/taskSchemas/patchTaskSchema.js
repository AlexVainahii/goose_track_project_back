const Joi = require("joi");
const { timeRegexp, dateRegexp, validateStartEndTime } = require("@helpers");

const patchTaskSchema = Joi.object({
  title: Joi.string().max(250),
  
  start: Joi.string()
    .pattern(timeRegexp)
    .error(() => new Error("start time")),

  end: Joi.string()
    .pattern(timeRegexp)
    .error(() => new Error("end time")),

  priority: Joi.string().error(
    () => new Error("priority that must mutch any of 'LOW', 'MEDIUM', 'HIGH'")
  ),
  
  date: Joi.string()
    .pattern(dateRegexp)
    .error(() => new Error("date")),

  category: Joi.string().error(
    () =>
      new Error("category that must mutch any of 'TODO', 'INPROGRESS', 'DONE'")
  ),
})
  .custom(validateStartEndTime)
  .messages({
    "any.invalid": `end time must be bigger than start time`,
  });

module.exports = { patchTaskSchema };
