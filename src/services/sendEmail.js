const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = async (date) => {
  const email = { ...date, from: "sanjaksms@gmail.com" };
  console.log("date :>> ", date);
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    return false;
  }
};
module.exports = sendEmail;
