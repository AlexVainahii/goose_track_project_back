const Joi = require("joi");
const { emailRegexp } = require("@helpers");
const registerSchema = Joi.object({
  password: Joi.string().min(4).required().messages({
    "any.required": "Bad request (invalid request body)",
  }),
  email: Joi.string()
    .trim()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "Bad request (invalid request body)" }),
  userName: Joi.string()
    .min(3)
    .max(40)
    .messages({ "any.required": "Bad request (invalid request body)" }),
});
module.exports = { registerSchema };
