// module.exports = {
//   "/(get)": require("./getMonthTasks"),
//   "/(post)": require("./postTask"),
//   "/:id(patch)": require("./patchTask"),
//   "/:id(delete)": require("./deleteTask"),
// };

const getMonthTasks = require("./getMonthTasks");
const postTask = require("./postTask");
const patchTask = require("./patchTask");
const deleteTask = require("./deleteTask");

module.exports = {
  "/tasks": { ...getMonthTasks, ...postTask },
  "/tasks/{id}": { ...patchTask, ...deleteTask },
};
