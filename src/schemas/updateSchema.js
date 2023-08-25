const Joi = require("joi");
const { emailRegexp, phoneRegexp } = require("./regexp");
const updateSchema = Joi.object({
  password: Joi.string().min(4).optional(),

  email: Joi.string()
    .trim()
    .regex(emailRegexp)
    .message("Invalid email format")
    .optional(),
  userName: Joi.string()
    .min(3)
    .max(40)
    .message(
      "Invalid userName format. Please fill name min 3 letter max 40 letter"
    )
    .optional(),

  phone: Joi.string()
    .trim()
    .regex(phoneRegexp)
    .message(
      "Invalid phone number format. Please fill a valid phone number (000) 000-0000."
    )
    .optional(),

  skype: Joi.string()
    .trim()
    .regex(phoneRegexp)
    .message(
      "Invalid skype number format. Please fill a valid skype number (000) 000-0000."
    )
    .optional(),

  birthDay: Joi.string().optional(),

  avatarURL: Joi.string().optional(),
});
module.exports = { updateSchema };
