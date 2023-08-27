const service = require("@service");

const dontBody = (req, res, next) => {
  console.log("req.body :>> ", req.body);
  if (Object.keys(req.body).length === 0) {
    switch (req.method) {
      case "PATCH":
        throw service.CreateError(400, "missing fields");

      default:
        throw service.CreateError(400, "missing fields");
    }
  }

  next();
};
module.exports = dontBody;
