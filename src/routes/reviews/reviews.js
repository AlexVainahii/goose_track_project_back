const express = require("express");

const { reviewsCtrl } = require("@controllers");
const middleW = require("@middlewares");
const { schemas } = require("@schemas");

const router = express.Router();

router.get("/", reviewsCtrl.getAllRev);

router.get("/own", middleW.authenticate, reviewsCtrl.getOwnRev);

router.post(
  "/own",
  middleW.authenticate,
  middleW.validateBody(schemas.postReviewSchema),
  reviewsCtrl.postOwnRev
);

router.patch(
  "/own",
  middleW.authenticate,
  middleW.validateBody(schemas.patchReviewSchema),
  reviewsCtrl.patchOwnRev
);

router.delete("/own", middleW.authenticate, reviewsCtrl.deleteOwnRev);

module.exports = router;
