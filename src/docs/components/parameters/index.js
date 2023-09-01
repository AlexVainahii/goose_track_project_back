const month = require("./month");
const verificationToken = require("./verificationToken");

module.exports = { parameters: { ...month, ...verificationToken } };
