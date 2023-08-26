const { CheckByError } = require("@service");
const { Review } = require("@models");

const postOwnRev = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.findOne({ owner });
  CheckByError(result, 409, "You can add only one review")
  const newRev = await Review.create({ owner, ...req.body });
  newRev.owner = undefined;
  res.status(201).json(newRev);
};

module.exports = { postOwnRev };
