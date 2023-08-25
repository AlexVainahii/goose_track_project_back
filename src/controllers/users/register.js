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
    "Please provide all necessary data"
  );

  const user = await User.findOne({ email });

  service.CheckByError(user, 409, "Email in use");

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

  res.status(200).json({
    status: 200,
    user: {
      email: newUser.email,
    },
  });
};

module.exports = { register: asyncHandler(register) };
