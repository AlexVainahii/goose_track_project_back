const { User } = require("@models");
const service = require("@service");
const asyncHandler = require("express-async-handler");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  service.CheckByError(!user, 401, "Email not found");

  service.CheckByError(
    user.verify,
    400,
    "Verification has already been passed"
  );
  const verifyEmail = service.getVerifyEmail(email, user.verificationToken);

  await service.sendEmail(verifyEmail);

  res.status(200).json({ status: 200, message: "Verification email sent" });
};

module.exports = { resendVerifyEmail: asyncHandler(resendVerifyEmail) };
