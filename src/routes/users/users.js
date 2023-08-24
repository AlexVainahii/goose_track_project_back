const express = require("express");

const router = express.Router();

router.post("/register", (req, res, next) => {
  res.status(200).json({
    user: 1,
  });
});
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello Users",
  });
});
router.post("/login");

router.get("/current");

router.patch("/user");

router.post("/logout");

module.exports = router;
