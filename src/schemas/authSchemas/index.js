const { registerSchema } = require("./registerSchema");
const { emailSchema } = require("./emailSchema");
const { loginSchema } = require("./loginSchema");
const { updateSchema } = require("./updateSchema");

module.exports = { registerSchema, emailSchema, loginSchema, updateSchema };
