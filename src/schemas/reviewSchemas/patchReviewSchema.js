const Joi = require("joi");

const patchReviewSchema = Joi.object({
  review: Joi.string()
    .trim()
    .error(() => new Error("review")),
  rating: Joi.number()
    .min(1)
    .max(5)
    .error(() => new Error("rating")),
});

module.exports = { patchReviewSchema };
