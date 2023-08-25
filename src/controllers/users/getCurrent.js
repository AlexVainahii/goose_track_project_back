const expressAsyncHandler = require("express-async-handler");

const getCurrent = async (req, res) => {
  const { email } = req.user;

  res.status(200).json({
    status: 200,
    user: { email },
  });
};

module.exports = { getCurrent: expressAsyncHandler(getCurrent) };
