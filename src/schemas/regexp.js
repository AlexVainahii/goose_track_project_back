const phoneRegexp = /^\(\d{3}\) \d{3}-\d{4}$/;
const emailRegexp =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;
const timeRegexp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

module.exports = { phoneRegexp, emailRegexp, timeRegexp };
