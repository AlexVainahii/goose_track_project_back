const Joi = require("joi");

const patchReviewSchema = Joi.object({
  review: Joi.string().trim(),
  rating: Joi.number().min(1).max(5),
});

module.exports = { patchReviewSchema };
