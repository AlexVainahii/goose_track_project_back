const dontBody = require("./dontBody");
const isValidId = require("./isValidId");
const validateBody = require("./validateBody");
const authenticate = require("./authenticate");
const { uploadAvatar } = require("./uploadAvatar");
const validateUpdateBody = require("./validateUpdateBody");

module.exports = {
  dontBody,
  isValidId,
  validateBody,
  authenticate,
  uploadAvatar,
  validateUpdateBody,
};
