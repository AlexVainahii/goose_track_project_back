const { templateVerificationEmail } = require("./templateVerificationEmail");

const getVerifyEmail = (email, verificationToken, userName) => {
  return {
    to: email,
    subject: "Verify email",
    html: templateVerificationEmail(
      `${process.env.BASE_URL}/verify/${verificationToken}`,
      userName
    ),
  };
};
module.exports = getVerifyEmail;
