const { UserService } = require("@services");
const asyncHandler = require("express-async-handler");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;

  const { email, password, userName, skype, phone, birthDay, avatarURL } =
    req.body;
  const updatedFields = {};

  if (email) {
    updatedFields.email = email;
    updatedFields.verify = false;
  }
  if (password) updatedFields.password = password;
  if (userName) updatedFields.userName = userName;
  if (skype) updatedFields.skype = skype;
  if (phone) updatedFields.phone = phone;
  if (birthDay) updatedFields.birthDay = birthDay;
  if (avatarURL) updatedFields.avatarURL = avatarURL;

  if (req.file) {
    const avatarURL = req.file.path;
    updatedFields.avatarURL = avatarURL;
  }

  await UserService.updated(_id, updatedFields);

  res.status(200).json({
    status: 200,
    message: "User updated successfully",
    user: {
      email: req.user.email,
      userName: req.user.userName,
      avatarURL: req.user.avatarURL,
      phone: req.user.phone,
      skype: req.user.skype,
      birthDay: req.user.birthDay,
      token: req.user.token,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt,
      ...updatedFields,
    },
  });
};
module.exports = { updateUser: asyncHandler(updateUser) };
