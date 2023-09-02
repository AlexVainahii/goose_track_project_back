const { templateRegistrationEmail } = require("./templateRegistrationEmail");
const { templateRenewPassEmail } = require("./templateRenevPassEmail");
const { templateVerificationEmail } = require("./templateVerificationEmail");
class GetEmail {
  verifyEmail(email, verificationToken, userName) {
    return {
      to: email,
      subject: "Verify email",
      html: templateVerificationEmail(
        `${process.env.BASE_URL_FRONT}/verify/${verificationToken}`,
        userName
      ),
    };
  }

  registrationsConfirm(email, userName) {
    return {
      to: email,
      subject: "Registry confirm",
      html: templateRegistrationEmail(userName),
    };
  }

  renewPass(email, password, userName) {
    return {
      to: email,
      subject: "Renew password",
      html: templateRenewPassEmail(
        `${process.env.BASE_URL_FRONT}/login`,
        userName,
        password
      ),
    };
  }
}

module.exports = new GetEmail();
