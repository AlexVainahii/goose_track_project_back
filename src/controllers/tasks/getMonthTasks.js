const { Task } = require("@models");
const { monthRegexp, CheckByError } = require("@helpers");

const getMonthTasks = async (req, res) => {
  const { month } = req.query;
  CheckByError(
    month.match(monthRegexp) === null,
    400,
    "query param month do not match"
  );

  const result = await Task.find(
    {
      owner: req.user._id,
      date: { $regex: month, $options: "i" },
    },
    "-owner"
  );
  res.json({ data: result, status: 200 });
};

module.exports = { getMonthTasks };
