const { phoneRegexp, emailRegexp } = require("./regexp");
const { registerSchema } = require("./registerSchema");
const { emailSchema } = require("./emailSchema");
const { loginSchema } = require("./loginSchema");
const { updateSchema } = require("./updateSchema");
const schemas = {
  phoneRegexp,
  emailRegexp,
  registerSchema,
  emailSchema,
  loginSchema,
  updateSchema,
};
module.exports = { schemas };
