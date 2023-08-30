const {
  dateRegexp,
  emailRegexp,
  phoneRegexp,
  timeRegexp,
  monthRegexp,
} = require("./regexp");
const { CreateError } = require("./CreateError");
const CheckByError = require("../helpers/CheckByError");
const handleMongooseError = require("../helpers/handleMongooseError");
const { errorMessageList } = require("./errorMessageList");
const getEmail = require("./getEmail");
const templateVerificationEmail = require("./templateVerificationEmail");
const templateRegistrationEmail = require("./templateRegistrationEmail");
const templateChangePassEmail = require("./templateChangePassEmail");

module.exports = {
  dateRegexp,
  emailRegexp,
  phoneRegexp,
  timeRegexp,
  monthRegexp,
  CreateError,
  handleMongooseError,
  CheckByError,
  errorMessageList,
  getEmail,
  templateVerificationEmail,
  templateRegistrationEmail,
  templateChangePassEmail,
};
