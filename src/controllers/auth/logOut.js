const { UserService } = require("@services");
const asyncHandler = require("express-async-handler");

const logOut = async (req, res) => {
  const { _id } = req.user;

  await UserService.logout(_id);

  res.status(204).json({
    status: 204,
    message: "No Content",
  });
};

module.exports = { logOut: asyncHandler(logOut) };
