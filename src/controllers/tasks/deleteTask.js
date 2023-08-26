const { Task } = require("@models");
const { CheckByError } = require("@service");

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndRemove(id);
  CheckByError(!result, 404);
  result.owner = undefined;
  res.json(result);
};

module.exports = { deleteTask };
