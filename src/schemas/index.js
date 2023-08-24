const { phoneRegexp, emailRegexp } = require("./regexp");
const { registerSchema } = require("./userRegisterSchema");
const { emailSchema } = require("./emailSchema");
const { loginSchema } = require("./loginSchema");
const schemas = {
  phoneRegexp,
  emailRegexp,
  registerSchema,
  emailSchema,
  loginSchema,
};
module.exports = { schemas };
