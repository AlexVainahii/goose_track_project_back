const { CheckByError } = require("@service");
const { Review } = require("@models");

const patchOwnRev = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.findOneAndUpdate({ owner }, req.body, {
    new: true,
  });
  CheckByError(!result, 404);
  result.owner = undefined;
  res.json(result);
};

module.exports = { patchOwnRev };
