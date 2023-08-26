const expressAsyncHandler = require("express-async-handler");

const getCurrent = async (req, res) => {
  const {
    email,
    userName,
    avatarURL,
    phone,
    skype,
    birthDay,
    token,
    createdAt,
    updatedAt,
  } = req.user;

  // Відображаємо всі поля юзера, крім пароля
  const userData = {
    email,
    userName,
    avatarURL,
    phone,
    skype,
    birthDay,
    createdAt,
    updatedAt,
  };

  res.status(200).json({
    status: 200,
    message: "success",
    token,
    user: userData,
  });
};

module.exports = { getCurrent: expressAsyncHandler(getCurrent) };
