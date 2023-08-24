const { register } = require("./register");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");
const { logIn } = require("./logIn");
module.exports = { register, verifyEmail, resendVerifyEmail, logIn };
