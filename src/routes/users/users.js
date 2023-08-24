const express = require("express");
const middleW = require("../../middlewares");
const { schemas } = require("../../schemas");
const { usersCtrl } = require("../../controlers");

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
router.post("/login");

router.get("/current");

router.patch("/user");

router.post("/logout");

module.exports = router;
