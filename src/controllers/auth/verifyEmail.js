const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const data = await UserService.verify(verificationToken);

  res.status(200).json({
    status: 200,
    message: "Verification successful",
    email: data.email,
    token: data.token,
    verify: data.verify,
  });
};
module.exports = { verifyEmail: asyncHandler(verifyEmail) };
