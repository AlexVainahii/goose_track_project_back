const validateStartEndMonth = (obj, helpers) => {
  const { startMonth, endMonth } = obj;
  const numericStartMonth = parseInt(startMonth, 10);
  const numericEndMonth = parseInt(endMonth, 10);

  if (numericEndMonth < numericStartMonth) {
    return helpers.error("any.invalid");
  }
};

module.exports = { validateStartEndMonth };
