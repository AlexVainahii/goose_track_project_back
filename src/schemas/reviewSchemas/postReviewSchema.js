const Joi = require("joi");

const postReviewSchema = Joi.object({
    review:Joi.string().trim().required(),
    rating:Joi.number().min(1).max(5).required(),
});

module.exports = { postReviewSchema };
