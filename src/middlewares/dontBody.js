const helpers = require("@helpers");

const dontBody = (req, res, next) => {
  if (!req.file & (Object.keys(req.body).length === 0)) {
    switch (req.method) {
      case "PATCH":
        throw helpers.CreateError(400, "Bad request (invalid request body)");

      default:
        throw helpers.CreateError(400, "Bad request (invalid request body)");
    }
  }
  next();
};
module.exports = dontBody;
