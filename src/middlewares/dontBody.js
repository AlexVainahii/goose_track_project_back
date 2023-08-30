const helpers = require("@helpers");

const dontBody = (req, res, next) => {
  if (!req.file & (Object.keys(req.body).length === 0)) {
    console.log("req :>> ", req);
    switch (req.method) {
      case "PATCH":
        throw helpers.CreateError(400, "missing fields");

      default:
        throw helpers.CreateError(400, "missing fields");
    }
  }
  next();
};
module.exports = dontBody;
