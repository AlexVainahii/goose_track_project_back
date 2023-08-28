const { UserService } = require("@services");
const asyncHandler = require("express-async-handler");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  await UserService.resendVerifyEmail(email);
  res.status(200).json({ status: 200, message: "Verification email sent" });
};

module.exports = { resendVerifyEmail: asyncHandler(resendVerifyEmail) };
