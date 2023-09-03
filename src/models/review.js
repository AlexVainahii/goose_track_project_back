const { Schema, model } = require("mongoose");
const helpers = require("@helpers");

const reviewShema = new Schema(
  {
    review: { type: String, require: [true, "Review text is required"] },
    rating: {
      type: Number,
      require: [true, "NO rating, NO review"],
      enum: [1, 2, 3, 4, 5],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

reviewShema.post("save", helpers.handleMongooseError);

const Review = model("review", reviewShema);

module.exports = { Review };
