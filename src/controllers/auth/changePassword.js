const helpers = require("@helpers");
const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const changePassword = async (req, res) => {
  const { newPassword } = req.body;
  helpers.CheckByError(!newPassword, 400, "Bad request (invalid request body)");
  const data = await UserService.changePass(req.user, newPassword);

  res.status(200).json({
    status: 200,
    message: "success",
    ...data,
  });
};

module.exports = { changePassword: asyncHandler(changePassword) };
