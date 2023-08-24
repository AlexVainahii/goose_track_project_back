const { User } = require("../../models");
const service = require("../../service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  service.CheckByError(!user, 401, "Email or password is wrong");

  service.CheckByError(!user.verify, 401, "Email not verified");

  const passwordCompare = await bcrypt.compare(password, user.password);

  service.CheckByError(!passwordCompare, 401, "Email or password is wrong");

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token: token,
    user: { email: user.email },
  });
};

module.exports = { logIn: asyncHandler(logIn) };
