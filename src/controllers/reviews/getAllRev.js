const { Review } = require("@models");

const getAllRev = async (req, res) => {
  const result = await Review.find().populate(
    "owner",
    "userName avatarURL -_id"
  );

  const modResult = result.map((el) => {
    const {
      _id,
      review,
      rating,
      owner: { userName = "Deleted", avatarURL = "" },
    } = el;

    return { _id, review, rating, userName, avatarURL };
  });
  res.json({ data: modResult, status: 200 });
};

module.exports = { getAllRev };
