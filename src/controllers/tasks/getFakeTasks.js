const { Task } = require("@models");
const { getTasks, CheckByError } = require("@helpers");

const getFakeTasks = async (req, res) => {
  const owner = req.user._id;
  const { countTasks, startMonth, endMonth } = req.body;
  if (!countTasks || !startMonth || !endMonth) {
    CheckByError(400, "Bad request (invalid request body)");
  }
  const tasks = getTasks(countTasks, owner, startMonth, endMonth);
  Task.insertMany(tasks);
  res.status(200).json({ message: "Success set fake tasks in User" });
};

module.exports = { getFakeTasks };
