const { phoneRegexp, emailRegexp, timeRegexp } = require("./regexp");
const { registerSchema } = require("./userRegisterSchema");
const { emailSchema } = require("./emailSchema");
const { loginSchema } = require("./loginSchema");
const { updateSchema } = require("./updateSchema");
const schemas = {
  phoneRegexp,
  emailRegexp,
  timeRegexp,
  registerSchema,
  emailSchema,
  loginSchema,
  updateSchema,
};
module.exports = { schemas };
