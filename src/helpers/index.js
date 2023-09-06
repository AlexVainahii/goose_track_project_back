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
const getTasks = require("./getTasks");
const generateRandomPassword = require("./generateRandomPassword");
const { validateStartEndTime } = require("./validateTime");
const { validateStartEndMonth } = require("./validateStartEndMonth");
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
  validateStartEndTime,
  validateStartEndMonth,
  getTasks,
};
