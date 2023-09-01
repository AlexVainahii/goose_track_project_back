const { errorMessageList } = require("./errorMessageList");

const CreateError = (status, message = errorMessageList[status]) => {
  console.log("messag :>> ", message);
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { CreateError };
