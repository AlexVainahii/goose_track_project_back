const express = require("express");
const middleW = require("../../middlewares");
const { schemas } = require("../../schemas");
const { usersCtrl } = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  middleW.validateBody(schemas.registerSchema),
  usersCtrl.register
);

router.get("/", (req, res, next) => {
  res.status(200).json({
    message:
      "Hello team Андрій Гадар, Ганна Тіль, Олександр Вайнагій, Андрій Ганзел, Сергій Серчинський,Андрій Кецко, Володимир Костенко, Юрій Клименко,Галина Карпінська,   Юрій Кагадій, Олександр Дерень,Ілля Сидор",
  });
});

router.post(
  "/login",
  middleW.validateBody(schemas.loginSchema),
  usersCtrl.logIn
);

router.get("/current", middleW.authenticate, usersCtrl.getCurrent);

router.patch("/user", middleW.authenticate);

router.post("/logout", middleW.authenticate, usersCtrl.logOut);

router.get("/verify/:verificationToken", usersCtrl.verifyEmail);

router.post(
  "/verify",
  middleW.validateBody(schemas.emailSchema),
  usersCtrl.resendVerifyEmail
);

module.exports = router;
