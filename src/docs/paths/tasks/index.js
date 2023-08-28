module.exports = {
  "/(get)": require("./getMonthTasks"),
  "/(post)": require("./postTask"),
  "/:id(patch)": require("./patchTask"),
  "/:id(delete)": require("./deleteTask"),
};
