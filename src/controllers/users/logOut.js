const { User } = require("@models");
const asyncHandler = require("express-async-handler");
const logOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({
    status: 204,
    message: "No Content",
  });
};

module.exports = { logOut: asyncHandler(logOut) };
