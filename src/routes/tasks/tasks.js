const express = require("express");

const middleW = require("@middlewares");
const { tasksCtrl } = require("@controllers");
const { schemas } = require("@schemas");

const router = express.Router();

router.get("/", middleW.authenticate, tasksCtrl.getMonthTasks);

router.post(
  "/",
  middleW.authenticate,
  middleW.validateBody(schemas.postTaskSchema),
  tasksCtrl.postTask
);

router.patch(
  "/:id",
  middleW.isValidId,
  middleW.authenticate,
  middleW.validateBody(schemas.patchTaskSchema),
  tasksCtrl.patchTask
);

router.delete(
  "/:id",
  middleW.isValidId,
  middleW.authenticate,
  tasksCtrl.deleteTask
);

router.post(
  "/setFakeTasks",
  middleW.authenticate,
  middleW.validateBody(schemas.getFakeTaskSchema),
  tasksCtrl.getFakeTasks
);

module.exports = router;
