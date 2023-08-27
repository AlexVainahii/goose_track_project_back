const { User } = require("@models");
const service = require("@service");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const asyncHandler = require("express-async-handler");

const register = async (req, res) => {
  const { email, password, userName } = req.body;
  service.CheckByError(
    !email || !password || !userName,
    400,
    "Bad request (invalid request body)"
  );

  const user = await User.findOne({ email });

  service.CheckByError(user, 409, "Provided email already exists");

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = uuidv4();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = service.getVerifyEmail(email, verificationToken);

  await service.sendEmail(verifyEmail);

  res.status(201).json({
    status: 201,
    message: "success",
    user: {
      email: newUser.email,
    },
  });
};

module.exports = { register: asyncHandler(register) };
