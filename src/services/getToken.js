const jwt = require("jsonwebtoken");

const getToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "23h" });
};

module.exports = getToken;
