const express = require("express");
require("module-alias/register");
const middleW = require("@middlewares");
const { schemas } = require("@schemas");
const { usersCtrl } = require("@controllers");

const router = express.Router();

router.post(
  "/register",
  middleW.validateBody(schemas.registerSchema),
  usersCtrl.register
);

router.post(
  "/login",
  middleW.validateBody(schemas.loginSchema),
  usersCtrl.logIn
);

router.get("/current", middleW.authenticate, usersCtrl.getCurrent);

router.patch(
  "/user",
  middleW.authenticate,
  middleW.uploadAvatar.single("avatar"),
  middleW.dontBody,
  middleW.validateUpdateBody(schemas.updateSchema),
  usersCtrl.updateUser
);

router.post("/logout", middleW.authenticate, usersCtrl.logOut);

router.get("/verify/:verificationToken", usersCtrl.verifyEmail);

router.post(
  "/resendVerify",
  middleW.validateBody(schemas.emailSchema),
  usersCtrl.resendVerifyEmail
);

module.exports = router;
