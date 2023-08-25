const path = require("path");
const { User } = require("@models");
const service = require("@service");
const Jimp = require("jimp");
const asyncHandler = require("express-async-handler");
const avatarsDir = path.join(__dirname, "..", "..", "..", "public", "avatars");

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
  if (avatarURL) updatedFields.birthDay = avatarURL;
  if (req.file || !avatarURL) {
    const { path: tempUpload, originalname } = req.file;

    const fileName = `${_id}.${
      originalname.split(".")[originalname.split(".").length - 1]
    }`;

    const resultUpload = path.join(avatarsDir, fileName);

    Jimp.read(tempUpload)
      .then((img) => img.resize(250, 250).write(resultUpload))
      .catch(() => next(service.CreateError(422)));

    const avatarURL = path.join("avatars", fileName);
    updatedFields.avatarURL = avatarURL;
  }
  await User.findByIdAndUpdate(_id, { $set: updatedFields });
  res.status(200).json({ status: 200, message: "User updated successfully" });
};
module.exports = { updateUser: asyncHandler(updateUser) };
