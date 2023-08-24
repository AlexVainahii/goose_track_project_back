const { phoneRegexp, emailRegexp } = require("./regexp");
const { registerSchema } = require("./userRegisterSchema");
const { emailSchema } = require("./emailSchema");
const schemas = {
  phoneRegexp,
  emailRegexp,
  registerSchema,
  emailSchema,
};
module.exports = { schemas };
