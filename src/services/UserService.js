const bcrypt = require("bcrypt");
const { User } = require("@models");
const { v4: uuidv4 } = require("uuid");
const helpers = require("@helpers");
const getToken = require("./getToken");
const sendEmail = require("./sendEmail");

class UserService {
  async register({ email, password, userName }) {
    const user = await User.findOne({ email });

    helpers.CheckByError(user, 409, "Provided email already exists");

    const hashPassword = await bcrypt.hash(password, 10);

    const verificationToken = uuidv4();

    const newUser = await User.create({
      email,
      userName,
      password: hashPassword,
      verificationToken,
    });

    const token = getToken(newUser);

    return {
      email: newUser.email,
      userName: newUser.userName,
      avatarURL: newUser.avatarURL,
      phone: newUser.phone,
      skype: newUser.skype,
      birthDay: newUser.birthDay,
      token: token,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
      verificationToken: newUser.verificationToken,
      verify: newUser.verify,
    };
  }

  async login({ email, password }) {
    const user = await User.findOne({ email });

    const {
      userName,
      avatarURL,
      phone,
      skype,
      birthDay,
      createdAt,
      updatedAt,
    } = user;

    helpers.CheckByError(!user, 401, "Email or password is wrong");

    // helpers.CheckByError(!user.verify, 401, "Email not verified");

    const passwordCompare = await bcrypt.compare(password, user.password);

    helpers.CheckByError(!passwordCompare, 401, "Email or password is wrong");

    const token = getToken(user);

    await User.findByIdAndUpdate(user._id, { token });
    return {
      email,
      userName,
      avatarURL,
      phone,
      skype,
      birthDay,
      token: token,
      createdAt,
      updatedAt,
    };
  }

  async logout(_id) {
    await User.findByIdAndUpdate(_id, { token: "" });
  }

  async resendVerifyEmail(email) {
    const user = await User.findOne({ email });
    helpers.CheckByError(!user, 401, "Email not found");

    helpers.CheckByError(
      user.verify,
      400,
      "Verification has already been passed"
    );
    const verifyEmail = helpers.getVerifyEmail(
      email,
      user.verificationToken,
      user.userName
    );

    await sendEmail(verifyEmail);
  }

  async updated(_id, updatedFields) {
    await User.findByIdAndUpdate(_id, { $set: updatedFields });
  }

  async verify(verificationToken) {
    const user = await User.findOne({ verificationToken });

    helpers.CheckByError(!user, 404, "User not found");

    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: "",
    });

    return getToken(user);
  }
}
module.exports = new UserService();
