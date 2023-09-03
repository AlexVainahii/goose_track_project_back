const Joi = require("joi");
const { emailRegexp, phoneRegexp, birthDayRegexp } = require("@helpers");
const updateSchema = Joi.object({
  email: Joi.string()
    .trim()
    .regex(emailRegexp)
    .empty(true)
    .messages({
      "string.base": "The email must be a string.",
      "string.pattern.base": "The email must be in format test@gmail.com.",
    })
    .optional(),
  userName: Joi.string()
    .min(3)
    .max(40)
    .empty(true)
    .messages({
      "string.base": "The userName must be a string.",
      "string.pattern.base": "The userName must be min 3 max 40 letters.",
    })
    .optional(),

  phone: Joi.string()
    .trim()
    .regex(phoneRegexp)
    .empty(true)
    .messages({
      "string.base": "The skype must be a string.",
      "string.pattern.base":
        "Invalid phone number format. Please fill a valid phone number (000) 000-0000.",
    })
    .optional(),

  skype: Joi.string()
    .trim()
    .empty(true)
    .messages({
      "string.base": "The skype must be a string.",
    })
    .optional(),

  birthDay: Joi.string()
    .optional()
    .pattern(birthDayRegexp)
    .empty(true)
    .messages({
      "string.base": "The skype must be a string.",
      "string.pattern.base":
        "Invalid birthDayR format. Please fill a valid birthDay date 15/03/2023",
    }),
});
module.exports = { updateSchema };
