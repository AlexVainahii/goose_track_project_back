const { User } = require("../../models");
const service = require("../../service");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const asyncHandler = require("express-async-handler");

const register = async (req, res) => {
  const { email, password, userName } = req.body;
  console.log("object :>> ", email, password, userName);
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

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${process.env.BASE_URL}${process.env.PORT}/verify/${verificationToken}">Click verify email</a>`,
    text: `<a target="_blank" href="$http://localhost:5000/verify/${verificationToken}">Click verify email</a>`,
  };

  await service.sendEmail(verifyEmail);

  res.status(200).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = { register: asyncHandler(register) };
