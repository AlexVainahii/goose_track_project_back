const getVerifyEmail = (email, verificationToken) => {
  return {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${process.env.BASE_URL}/verify/${verificationToken}">Click verify email</a>`,
  };
};
module.exports = getVerifyEmail;
