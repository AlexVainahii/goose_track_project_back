const express = require("express");

const MW = require("@middleware");
const { tasksCtrl } = require("@controllers");
const {schemas} = require("@schemas");

const router = express.Router();

router.get(
  "/",
  MW.authenticate,
  MW.validateBody(schemas.getMonthTasksSchema),
  tasksCtrl.getMonthTasks
);

router.post(
  "/",
  MW.authenticate,
  MW.validateBody(schemas.postTaskSchema),
  tasksCtrl.postTask
);

router.patch(
  "/:id",
  MW.isValidId,
  MW.authenticate,
  MW.validateBody(schemas.patchTaskSchema),
  tasksCtrl.patchTask
);

router.delete(
  "/:id",
  MW.isValidId,
  MW.authenticate,
  tasksCtrl.deleteTask
);

module.exports = router;
