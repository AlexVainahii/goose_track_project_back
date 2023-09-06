const helpers = require("@helpers");

const validateUpdateBody = (schema) => {
  const func = (req, res, next) => {
    helpers.CheckByError(
      req.body === {},
      400,
      "Bad request (invalid request body)"
    );

    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);

      helpers.CheckByError(error, 400, errorMessages);
    }
    next();
  };

  return func;
};

module.exports = validateUpdateBody;
