const { templateRegistrationEmail } = require("./templateRegistrationEmail");
const { templateVerificationEmail } = require("./templateVerificationEmail");
class GetEmail {
  verifyEmail(email, verificationToken, userName) {
    return {
      to: email,
      subject: "Verify email",
      html: templateVerificationEmail(
        `${process.env.BASE_URL}/verify/${verificationToken}`,
        userName
      ),
    };
  }

  registrationsConfirm(email, userName) {
    return {
      to: email,
      subject: "registry confirm",
      html: templateRegistrationEmail(userName),
    };
  }

  // changePass(email, changePassToken, userName) {
  //   return {
  //     to: email,
  //     subject: "Verify email",
  //     html: templateChangePassEmail(
  //       `${process.env.BASE_URL}/verify/${changePassToken}`,
  //       userName
  //     ),
  //   };
  // }
}

module.exports = new GetEmail();
