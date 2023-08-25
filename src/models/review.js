const { Schema, model } = require("mongoose");
const service = require("@service");

const reviewShema = new Schema(
  {
    review: { type: String, require: [true, "Review text is required"] },
    rating: {
      type: Number,
      require: [true, "NO rating, NO review"],
      enum: [1, 2, 3, 4, 5],
    },
    // avatarUrl: {},
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

reviewShema.post("save", service.handleMongooseError);

const Review = model("review", reviewShema);

module.exports = { Review };
