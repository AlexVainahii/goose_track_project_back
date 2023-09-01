const services = require("@services");
const { getEmail } = require("@helpers");
const helpers = require("@helpers");
const asyncHandler = require("express-async-handler");
const { UserService } = require("@services");

const register = async (req, res) => {
  const { email, password, userName } = req.body;
  helpers.CheckByError(
    !email || !password || !userName,
    400,
    "Bad request (invalid request body)"
  );

  const { user, token } = await UserService.register({
    email,
    password,
    userName,
  });

  const verifyEmail = getEmail.registrationsConfirm(email, user.userName);

  await services.sendEmail(verifyEmail);

  res.status(201).json({
    status: 201,
    message: "success",
    user: user,
    token: token,
  });
};

module.exports = { register: asyncHandler(register) };
