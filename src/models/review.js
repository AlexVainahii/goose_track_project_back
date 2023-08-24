const { Schema, model } = require("mongoose");
const service = require("../service");

const reviewShema = new Schema(
  {
    owner: {},
    review: {},
    rating: {},
    avatarUrl: {},
  },
  { versionKey: false, timestamps: true }
);

reviewShema.post("save", service.handleMongooseError);

const Review = model("task", reviewShema);

module.exports = { Review };
