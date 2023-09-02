const Joi = require("joi");

const passSchema = Joi.object({
  newPassword: Joi.string()
    .min(4)
    .required()
    .messages({ "any.required": "Bad request (invalid request body)" }),
});
module.exports = { passSchema };
