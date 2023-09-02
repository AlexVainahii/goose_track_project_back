const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const sendRenewToken = async (req, res) => {
  const { email } = req.body;
  await UserService.sendResToken(email);
  res.status(200).json({
    status: 200,
    message: "resetPassword email sent",
    email: email,
  });
};

module.exports = { sendRenewToken: asyncHandler(sendRenewToken) };
