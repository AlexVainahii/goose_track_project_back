const {
  dateRegexp,
  emailRegexp,
  phoneRegexp,
  timeRegexp,
  monthRegexp,
  birthDayRegexp,
} = require("./regexp");
const { CreateError } = require("./CreateError");
const CheckByError = require("../helpers/CheckByError");
const handleMongooseError = require("../helpers/handleMongooseError");
const { errorMessageList } = require("./errorMessageList");
const getEmail = require("./getEmail");
const templateVerificationEmail = require("./templateVerificationEmail");
const templateRegistrationEmail = require("./templateRegistrationEmail");
const templateRenewPassEmail = require("./templateRenevPassEmail");
const { tasks } = require("./getTasks");
const generateRandomPassword = require("./generateRandomPassword");

module.exports = {
  dateRegexp,
  emailRegexp,
  phoneRegexp,
  timeRegexp,
  monthRegexp,
  birthDayRegexp,
  CreateError,
  handleMongooseError,
  CheckByError,
  generateRandomPassword,
  errorMessageList,
  getEmail,
  templateVerificationEmail,
  templateRegistrationEmail,
  templateRenewPassEmail,
  tasks,
};
