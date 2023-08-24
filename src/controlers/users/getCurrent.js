const service = require("../../service");

const getCurrent = async (req, res) => {
  const { email } = req.user;

  res.status(200).json({
    user: { email },
  });
};

module.exports = service.ctrlWrap(getCurrent);
