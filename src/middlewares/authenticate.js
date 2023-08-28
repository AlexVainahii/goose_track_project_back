const helpers = require("@helpers");
const { User } = require("@models");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  if (!authorization) {
    next(helpers.CreateError(401, "Not authorization"));
  }
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(helpers.CreateError(401, "Not authorization"));
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(helpers.CreateError(401, "Not authorization"));
    }
    req.user = user;
    next();
  } catch {
    next(helpers.CreateError(401, "Not authorization"));
  }
};
module.exports = authenticate;
