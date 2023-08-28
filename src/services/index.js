const { getToken } = require("./getToken");
const sendEmail = require("./sendEmail");
const UserService = require("./UserService");
module.exports = {
  sendEmail,
  getToken,
  UserService,
};
