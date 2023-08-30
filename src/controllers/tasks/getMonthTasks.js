const { Task } = require("@models");

const getMonthTasks = async (req, res) => {
  const result = await Task.find(
    {
      owner: req.user._id,
      date: { $regex: req.query.date, $options: "i" },
    },
    "-owner"
  );
  res.json({ data: result, status: 200 });
};

module.exports = { getMonthTasks };
