const { UserService } = require("@services");
const asyncHandler = require("express-async-handler");

const sendVerifyEmail = async (req, res) => {
  const { email } = req.user;
  await UserService.sendVerifyEmail(email);
  res
    .status(204)
    .json({ status: 200, message: "Verification email sent", email: email });
};

module.exports = { sendVerifyEmail: asyncHandler(sendVerifyEmail) };
