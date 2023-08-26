const express = require("express");

const MW = require("@middleware");
const { tasksCtrl } = require("@controllers");
const schemas = require("@schemas");

const router = express.Router();

router.get(
  "/",
  MW.authenticate,
  MW.validateBody(schemas.getMonthTasks),
  tasksCtrl.getMonthTasks
);

router.post(
  "/",
  MW.authenticate,
  MW.validateBody(schemas.postTask),
  tasksCtrl.postTask
);

router.patch(
  "/:id",
  MW.isValidId,
  MW.authenticate,
  MW.validateBody(schemas.patchTask),
  tasksCtrl.patchTask
);

router.delete(
  "/:id",
  MW.isValidId,
  MW.authenticate,
  tasksCtrl.deleteTask
);

module.exports = router;
