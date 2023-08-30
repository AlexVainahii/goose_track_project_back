const { UserService } = require("@services");
const asyncHandler = require("express-async-handler");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;
  const { email, password, userName, skype, phone, birthDay, avatarURL } =
    req.body;
  const updatedFields = {};
  if (email) updatedFields.email = email;
  if (password) updatedFields.password = password;
  if (userName) updatedFields.userName = userName;
  if (skype) updatedFields.skype = skype;
  if (phone) updatedFields.phone = phone;
  if (birthDay) updatedFields.birthDay = birthDay;
  if (avatarURL) updatedFields.avatarURL = avatarURL;
  if (req.file || !avatarURL) {
    const avatarURL = req.file.path;
    updatedFields.avatarURL = avatarURL;
  }
  await UserService.updated(_id, updatedFields);
  res
    .status(200)
    .json({
      status: 200,
      message: "User updated successfully",
      user: updatedFields,
    });
};
module.exports = { updateUser: asyncHandler(updateUser) };
