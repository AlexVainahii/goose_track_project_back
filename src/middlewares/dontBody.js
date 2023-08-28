const helpers = require("@helpers");

const dontBody = (req, res, next) => {
  console.log("req.file)>> ", req.file);
  if (
    (Object.keys(req.body).length === 0) &
    (Object.keys(req.file).length === 0)
  ) {
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
