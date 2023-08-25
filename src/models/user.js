const { Schema, model } = require("mongoose");
const { schemas } = require("@schemas");
const service = require("@service");
const userShema = new Schema(
  {
    userName: {
      type: String,

      required: [true, "Email is required"],
    },

    email: {
      type: String,
      match: schemas.emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    phone: {
      type: String,
      match: [
        schemas.phoneRegexp,
        "Invalid phone number format. Please fill a valid phone number (000) 000-0000.",
      ],
      default: "",
    },
    skype: {
      type: String,
      match: [
        schemas.phoneRegexp,
        "Invalid skype phone number format. Please fill a valid phone number (000) 000-0000.",
      ],
      default: "",
    },
    birthDay: { type: String, default: "" },

    token: { type: String, default: null },

    avatarURL: { type: String, required: true },

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

userShema.post("save", service.handleMongooseError);

const User = model("user", userShema);

module.exports = { User };
