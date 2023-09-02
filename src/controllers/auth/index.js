const { register } = require("./register");
const { verifyEmail } = require("./verifyEmail");
const { sendVerifyEmail } = require("./sendVerifyEmail");
const { logIn } = require("./logIn");
const { logOut } = require("./logOut");
const { getCurrent } = require("./getCurrent");
const { updateUser } = require("./updateUser");
const { sendRenewPassword } = require("./sendRenewPassword");
const { changePassword } = require("./changePassword");
module.exports = {
  register,
  verifyEmail,
  sendVerifyEmail,
  logIn,
  logOut,
  getCurrent,
  updateUser,
  sendRenewPassword,
  changePassword,
};
