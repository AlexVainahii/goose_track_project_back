const { Task } = require("@models");
const { CheckByError } = require("@helpers");

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  CheckByError(task.owner._id.toString() !== req.user._id.toString(),404);
  const result = await Task.findByIdAndRemove(id);
  CheckByError(!result, 404);
  result.owner = undefined;
  res.json({data:result, status:200});
};

module.exports = { deleteTask };
