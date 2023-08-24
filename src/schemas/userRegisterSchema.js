const Joi = require("joi");
const { emailRegexp } = require("./regexp");
const registerSchema = Joi.object({
  password: Joi.string().min(4).required().messages({
    "any.required": "missing required password field",
  }),
  email: Joi.string()
    .trim()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required email field" }),
  userName: Joi.string(),
  token: Joi.string(),
});
module.exports = { registerSchema };
