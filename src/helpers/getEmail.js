const { templateRegistrationEmail } = require("./templateRegistrationEmail");
const { templateRenevPassEmail } = require("./templateRenevPassEmail");
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

  renewPass(email, token, userName) {
    return {
      to: email,
      subject: "Renew password",
      html: templateRenevPassEmail(
        `${process.env.BASE_URL_FRONT}/resetPass?token=${token}`,
        userName
      ),
    };
  }
}

module.exports = new GetEmail();
