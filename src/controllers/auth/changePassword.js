const helpers = require("@helpers");
const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  helpers.CheckByError(
    !newPassword & !oldPassword,
    400,
    "Bad request (invalid request body)"
  );
  const data = await UserService.changePass(req.user, newPassword, oldPassword);

  res.status(200).json({
    status: 200,
    message: "Change password success",
    email: data,
  });
};

module.exports = { changePassword: asyncHandler(changePassword) };
