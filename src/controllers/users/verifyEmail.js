const { User } = require("@models");
const service = require("@service");
const asyncHandler = require("express-async-handler");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  service.CheckByError(!user, 404, "User not found");

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  const token = service.getToken(user);

  res
    .status(200)
    .json({ status: 200, message: "Verification successful", token: token });
};
module.exports = { verifyEmail: asyncHandler(verifyEmail) };
