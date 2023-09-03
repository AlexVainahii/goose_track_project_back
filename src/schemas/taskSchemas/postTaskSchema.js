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
    .error(() => new Error("start time")),
  
  end: Joi.string()
    .required()
    .pattern(timeRegexp)
    .error(() => new Error("end time")),
  
  priority: Joi.string()
    .default("LOW")
    .valid("LOW", "MEDIUM", "HIGH")
    .error(
      () => new Error("priority that must mutch any of 'LOW', 'MEDIUM', 'HIGH'")
    ),
  
  date: Joi.string()
    .required()
    .pattern(dateRegexp)
    .error(() => new Error("date")),
  
  category: Joi.string()
    .default("TODO")
    .valid("TODO", "INPROGRESS", "DONE")
    .error(() => new Error("category that must mutch any of 'TODO', 'INPROGRESS', 'DONE'")),

})
.custom(validateStartEndTime)
.messages({
      "any.invalid": `end time must be bigger than start time`,
    });

module.exports = { postTaskSchema };
