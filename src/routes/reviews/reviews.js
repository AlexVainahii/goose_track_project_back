const express = require("express");

const { reviewsCtrl } = require("@controllers");
const MW = require("@middlewares");
const { schemas } = require("@schemas");

const router = express.Router();

router.get("/", reviewsCtrl.getAllRev);

router.get("/own", MW.authenticate, reviewsCtrl.getOwnRev);

router.post(
  "/own",
  MW.authenticate,
  MW.validateBody(schemas.postReviewSchema),
  reviewsCtrl.postOwnRev
);

router.patch(
  "/own",
  MW.authenticate,
  MW.validateBody(schemas.patchReviewSchema),
  reviewsCtrl.patchOwnRev
);

router.delete("/own", MW.authenticate, reviewsCtrl.deleteOwnRev);

module.exports = router;
