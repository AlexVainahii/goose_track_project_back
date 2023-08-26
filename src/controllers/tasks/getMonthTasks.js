const { Task } = require("@models");

const getMonthTasks = async (req, res) => {
  const result = await Task.find(
    {
      owner: req.user._id,
      date: { $regex: req.body.date, $options: "i" },
    },
    "-owner"
  );
  res.json(result);
};

module.exports = { getMonthTasks };
