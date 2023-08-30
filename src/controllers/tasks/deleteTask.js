const { Task } = require("@models");
const { CheckByError } = require("@helpers");

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndRemove(id);
  CheckByError(!result, 404);
  result.owner = undefined;
  res.status(204).json({data:result, status:204});
};

module.exports = { deleteTask };
