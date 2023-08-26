const Joi = require("joi");

const postReviewSchema = Joi.object({
  review: Joi.string()
    .trim()
    .required()
    .error(() => new Error("review")),
  rating: Joi.number()
    .min(1)
    .max(5)
    .required()
    .error(() => new Error("rating")),
});

module.exports = { postReviewSchema };
