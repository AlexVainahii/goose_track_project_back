const { CheckByError } = require("@helpers");
const { Review } = require("@models");

const patchOwnRev = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.findOneAndUpdate({ owner }, req.body, {
    new: true,
  });
  CheckByError(!result, 404);
  result.owner = undefined;
  res.json({data:result, status:200});
};

module.exports = { patchOwnRev };
