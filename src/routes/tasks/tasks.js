const express = require("express");
const router = express.Router();
const MV = require("../../middlewares");

const { tasksCtrl } = require("../../controllers");

router.get("/", MV.authenticate, tasksCtrl.getMonthTasks);

router.post("/", MV.authenticate, tasksCtrl.postTask);

router.patch("/:id", MV.authenticate, tasksCtrl.patchTask);

router.delete("/:id", MV.authenticate, tasksCtrl.deleteTask);

module.exports = router;
