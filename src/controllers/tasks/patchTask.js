const { Task } = require("@models");
const { CheckByError } = require("@helpers");

const patchTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  CheckByError(task.owner._id.toString() !== req.user._id.toString(), 404);
  const { start, end } = req.body;
  if (start || end) {
    const task = await Task.findById(id);
    const [startHour, startMin] = start
      ? start.split(":")
      : task.start.split(":");
    const [endHour, endMin] = end ? end.split(":") : task.end.split(":");
    CheckByError(
      startHour > endHour || (startHour === endHour && startMin > endMin),
      406,
      "Start time must be lower then end time"
    );
  }
  const result = await Task.findByIdAndUpdate(id, req.body, { new: true });
  CheckByError(!result, 404);
  result.owner = undefined;
  res.json({ data: result, status: 200 });
};

module.exports = { patchTask };
