const bcrypt = require("bcrypt");
const { User } = require("@models");
const { v4: uuidv4 } = require("uuid");
const helpers = require("@helpers");
const getToken = require("./getToken");
const sendEmail = require("./sendEmail");
const jwt = require("jsonwebtoken");

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
    await User.findByIdAndUpdate(newUser._id, { token });
    return {
      user: {
        email: newUser.email,
        userName: newUser.userName,
        avatarURL: newUser.avatarURL,
        phone: newUser.phone,
        skype: newUser.skype,
        birthDay: newUser.birthDay,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
        verificationToken: newUser.verificationToken,
        verify: newUser.verify,
      },
      token: token,
    };
  }

  async login({ email, password }) {
    const user = await User.findOne({ email });

    helpers.CheckByError(!user, 401, "Email or password is wrong");

    const {
      userName,
      avatarURL,
      phone,
      skype,
      birthDay,
      verify,
      createdAt,
      updatedAt,
    } = user;

    // helpers.CheckByError(!user.verify, 401, "Email not verified");

    const passwordCompare = await bcrypt.compare(password, user.password);

    helpers.CheckByError(!passwordCompare, 401, "Email or password is wrong");
    let isToken = false;
    let token = user.token;
    try {
      jwt.verify(user.token, process.env.SECRET_KEY);
    } catch (error) {
      isToken = true;
    }
    if (isToken) {
      token = getToken(user);
      await User.findByIdAndUpdate(user._id, { token });
    }

    return {
      user: {
        email,
        userName,
        avatarURL,
        phone,
        skype,
        birthDay,
        verify,
        createdAt,
        updatedAt,
      },
      token: token,
    };
  }

  async logout(_id) {
    await User.findByIdAndUpdate(_id, { token: "" });
  }

  async sendVerifyEmail(email) {
    const user = await User.findOne({ email });
    helpers.CheckByError(!user, 401, "Email not found");

    helpers.CheckByError(
      user.verify,
      400,
      "Verification has already been passed"
    );
    const verifyEmail = helpers.getEmail.verifyEmail(
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
    let isToken = false;
    let token = user.token;
    try {
      jwt.verify(user.token, process.env.SECRET_KEY);
    } catch (error) {
      isToken = true;
    }
    if (isToken) {
      token = getToken(user);
      await User.findByIdAndUpdate(user._id, {
        token: token,
        verify: true,
        verificationToken: "",
      });
    } else {
      await User.findByIdAndUpdate(user._id, {
        verify: true,
        verificationToken: "",
      });
    }

    return { email: user.email, token: token, verify: true };
  }

  async sendGeneratePass(email) {
    const user = await User.findOne({ email });

    helpers.CheckByError(!user, 404, "Email not found");

    const password = helpers.generateRandomPassword(8);

    const hashPassword = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate(user._id, { password: hashPassword });

    const renewEmail = helpers.getEmail.renewPass(
      email,
      password,
      user.userName
    );
    await sendEmail(renewEmail);
    return email;
  }

  async changePass(changeUser, newPassword, oldPassword) {
    const passwordCompare = await bcrypt.compare(
      oldPassword,
      changeUser.password
    );

    helpers.CheckByError(!passwordCompare, 401, "oldPassword is wrong");

    const password = await bcrypt.hash(newPassword, 10);

    await User.findByIdAndUpdate(changeUser._id, { password });
    const renewEmail = helpers.getEmail.renewPass(
      changeUser.email,
      newPassword,
      changeUser.userName
    );
    await sendEmail(renewEmail);
    return changeUser.email;
  }
}

module.exports = new UserService();
