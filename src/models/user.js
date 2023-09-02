const { Schema, model } = require("mongoose");
const helpers = require("@helpers");
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "UserName is required"],
    },

    email: {
      type: String,
      match: helpers.emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    phone: {
      type: String,
      match: [helpers.phoneRegexp, "Invalid phone number format."],
      default: "",
    },
    skype: {
      type: String,
      default: "",
    },
    birthDay: { type: String, default: "" },

    token: { type: String, default: null },

    avatarURL: { type: String, default: "" },

    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", helpers.handleMongooseError);

const User = model("user", userSchema);

module.exports = { User };
