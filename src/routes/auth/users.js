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

router.get("/", (req, res, next) => {
  const namesAndCode = [
    { name: "Андрій Гадар", code: "" },
    { name: "Ганна Тіль", code: "" },
    { name: "Олександр Вайнагій", code: "" },
    { name: "Андрій Ганзел", code: "" },
    { name: "Сергій Серчинський", code: "" },
    { name: "Андрій Кецко", code: "" },
    { name: "Володимир Костенко", code: "" },
    { name: "Юрій Клименко", code: "" },
    { name: "Галина Карпінська", code: "" },
    { name: "Юрій Кагадій", code: "" },
    { name: "Олександр Дерень", code: "" },
  ];

  const generateCircles = namesAndCode
    .map((entry, index) => {
      const rotation = index * (360 / namesAndCode.length) + 90;
      return `
        <div class="circle" style="transform: translate(-50%, -50%) rotate(${rotation}deg);">
            <h2>${entry.name}</h2>
            <div class="code">
                ${entry.code}
            </div>
        </div>
    `;
    })
    .join("");

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Our Generation</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="circle-container">
            ${generateCircles}
        </div>
    </body>
    </html>
`;

  res.send(html);
});

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
  "/verify",
  middleW.validateBody(schemas.emailSchema),
  usersCtrl.resendVerifyEmail
);

module.exports = router;
