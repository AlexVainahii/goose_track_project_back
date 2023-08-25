const express = require("express");
const { reviewsCtrl } = require("../../controllers");
const MV = require("../../middlewares");

const router = express.Router();

router.get("/", reviewsCtrl.getAllRev);

router.get("/own", MV.authenticate, reviewsCtrl.getOwnRev);

router.post("/own", MV.authenticate, reviewsCtrl.postOwnRev);

router.patch("/own", MV.authenticate, reviewsCtrl.patchOwnRev);

router.delete("/own", MV.authenticate, reviewsCtrl.deleteOwnRev);

module.exports = router;
