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
    service.CheckByError(req.body === {}, 400, "missing required fields");
    const { error } = schema.validate(req.body);

    service.CheckByError(
      error,
      400,
      `missing required field ${error?.message}`
    );
    next();
  };

  return func;
};

module.exports = validateBody;
