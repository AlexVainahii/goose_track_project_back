const { Review } = require("@models");
const { CheckByError } = require("@service");

const getOwnRev = async (req, res) => {
  const owner = req.user._id;
  const result = await Review.findOne({ owner });
  CheckByError(!result, 404);
  result.owner = undefined;
  res.json(result);
};

module.exports = { getOwnRev };
