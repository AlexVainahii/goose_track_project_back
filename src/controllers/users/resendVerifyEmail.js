const { User } = require("../../models");
const service = require("../../service");
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

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${process.env.BASE_URL}/verify/${user.verificationToken}">Click verify email</a>`,
  };
  await service.sendEmail(verifyEmail);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = { resendVerifyEmail: asyncHandler(resendVerifyEmail) };
