const jwt = require("jsonwebtoken");

const getToken = (user, time = "23h") => {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: time });
};

module.exports = getToken;
