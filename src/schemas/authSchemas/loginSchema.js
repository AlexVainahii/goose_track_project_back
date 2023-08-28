const Joi = require("joi");
const { emailRegexp } = require("@helpers");
const loginSchema = Joi.object({
  password: Joi.string()
    .min(4)
    .required()
    .messages({ "any.required": "Bad request (invalid request body)" }),
  email: Joi.string().trim().pattern(emailRegexp).required().messages({
    "any.required": "Bad request (invalid request body)",
  }),
});
module.exports = { loginSchema };
