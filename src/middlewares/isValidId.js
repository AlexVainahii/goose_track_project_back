const { isValidObjectId } = require("mongoose");
const helpers = require("@helpers");
const isValidId = (req, res, next) => {
  const { id } = req.params;
  helpers.CheckByError(!isValidObjectId(id), 404, `${id} is not valid id`);
  next();
};
module.exports = isValidId;
