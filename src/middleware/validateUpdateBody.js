const service = require("@service");

const validateUpdateBody = (schema) => {
  const func = (req, res, next) => {
    service.CheckByError(req.body === {}, 400, "missing required field11");
    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      console.log("errorMessages :>> ", errorMessages);
      service.CheckByError(error, 400, errorMessages);
    }
    next();
  };

  return func;
};

module.exports = validateUpdateBody;
