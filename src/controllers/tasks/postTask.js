const { CheckByError } = require("@helpers");
const { Task } = require("@models");

const postTask = async (req, res) => {
  const { _id: owner } = req.user;
  const { priority = "LOW", category = "TODO", start, end } = req.body;
  const [startHour, startMin] = start.split(":");
  const [endHour, endMin] = end.split(":");
  CheckByError(
    startHour > endHour || (startHour === endHour && startMin > endMin),
    406,
    "Start time must be lower then end time"
  );
  const newTask = await Task.create({ owner, ...req.body, priority, category });
  newTask.owner = undefined;
  res.status(201).json({data:newTask, status:201});
};

module.exports = { postTask };
