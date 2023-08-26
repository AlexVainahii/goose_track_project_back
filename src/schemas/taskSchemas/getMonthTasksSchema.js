const Joi = require('joi');

const getMonthTasksSchema = Joi.object({
  date: Joi.string()
    .required()
    .regex(/^20\d\d-(0[1-9]|1[012])$/),
});

module.exports = { getMonthTasksSchema };