const service = require("@service");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    service.CheckByError(
      req.body === {},
      400,
      "Bad request (invalid request body)"
    );
    const { error } = schema.validate(req.body);

    service.CheckByError(error, 400, "Bad request (invalid request body)");
    next();
  };

  return func;
};

module.exports = validateBody;
