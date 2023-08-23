const express = require("express");

const router = express.Router();

router.post("register", (req, routes, next) => {
  res.status(200).json({
    user: 1,
  });
});

router.post("/login");

router.get("/current");

router.patch("/user");

router.post("/logout");

module.exports = router;
