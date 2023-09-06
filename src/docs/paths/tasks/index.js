const getMonthTasks = require("./getMonthTasks");
const postTask = require("./postTask");
const patchTask = require("./patchTask");
const deleteTask = require("./deleteTask");
const getFakeTasks = require("./getFakeTasks");

module.exports = {
  "/tasks": { ...getMonthTasks, ...postTask },
  "/tasks/{id}": { ...patchTask, ...deleteTask },
  "/tasks/setFakeTasks": { ...getFakeTasks },
};
