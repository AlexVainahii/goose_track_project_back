const { phoneRegexp, emailRegexp } = require("./regexp");
const { registerSchema } = require("./userRegisterSchema");
const schemas = {
  phoneRegexp,
  emailRegexp,
  registerSchema,
};
module.exports = { schemas };
