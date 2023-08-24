const Joi = require("joi");
const { emailRegexp } = require("./regexp");
const emailSchema = Joi.object({
  email: Joi.string()
    .trim()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required email field" }),
});
module.exports = emailSchema;
