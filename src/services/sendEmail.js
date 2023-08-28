const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = async (date) => {
  const email = { ...date, from: "sanjaksms@gmail.com" };
  await sgMail.send(email);
  return true;
};
module.exports = sendEmail;
