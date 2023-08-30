const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const userData = await UserService.login({ email, password });

  res.status(200).json({
    status: 200,
    message: "success",
    ...userData,
  });
};

module.exports = { logIn: asyncHandler(logIn) };
