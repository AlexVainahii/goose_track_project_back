const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const token = await UserService.verify(verificationToken);

  res
    .status(200)
    .json({ status: 200, message: "Verification successful", token: token });
};
module.exports = { verifyEmail: asyncHandler(verifyEmail) };
