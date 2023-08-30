const { Review } = require("@models");
const { CheckByError } = require("@helpers");

const deleteOwnRev = async (req, res) => {
  const owner = req.user._id;
  const result = await Review.findOneAndDelete({ owner });
  CheckByError(!result, 404);
  result.owner = undefined;
  res.status(204).json({data:result, status:204});
};

module.exports = { deleteOwnRev };
