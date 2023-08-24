const { register } = require("./register");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");
module.exports = { register, verifyEmail, resendVerifyEmail };
