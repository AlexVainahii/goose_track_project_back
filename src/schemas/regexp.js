const phoneRegexp = /^\(\d{3}\) \d{3}-\d{4}$/;
const emailRegexp =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;
const timeRegexp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const dateRegexp = /^20\d\d-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])/

module.exports = { phoneRegexp, emailRegexp, timeRegexp, dateRegexp };
