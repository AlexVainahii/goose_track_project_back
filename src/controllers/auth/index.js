const { register } = require("./register");
const { verifyEmail } = require("./verifyEmail");
const { sendVerifyEmail } = require("./sendVerifyEmail");
const { logIn } = require("./logIn");
const { logOut } = require("./logOut");
const { getCurrent } = require("./getCurrent");
const { updateUser } = require("./updateUser");
module.exports = {
  register,
  verifyEmail,
  sendVerifyEmail,
  logIn,
  logOut,
  getCurrent,
  updateUser,
};
