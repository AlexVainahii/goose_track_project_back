const express = require("express");

const { reviewsCtrl } = require("@controllers");
const MW = require("@middleware");
const schemas = require("@schemas");

const router = express.Router();

router.get("/", reviewsCtrl.getAllRev);

router.get("/own", MW.authenticate, reviewsCtrl.getOwnRev);

router.post(
  "/own",
  MW.authenticate,
  MW.validateBody(schemas.postOwnRev),
  reviewsCtrl.postOwnRev
);

router.patch(
  "/own",
  MW.authenticate,
  MW.validateBody(schemas.patchOwnRev),
  reviewsCtrl.patchOwnRev
);

router.delete("/own", MW.authenticate, reviewsCtrl.deleteOwnRev);

module.exports = router;
