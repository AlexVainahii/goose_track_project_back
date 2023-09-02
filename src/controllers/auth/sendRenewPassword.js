const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const sendRenewPassword = async (req, res) => {
  const { email } = req.body;
  await UserService.sendGeneratePass(email);
  res.status(200).json({
    status: 200,
    message: "GeneratePassword email sent",
    email: email,
  });
};

module.exports = { sendRenewPassword: asyncHandler(sendRenewPassword) };
