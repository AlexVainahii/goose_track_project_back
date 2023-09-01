module.exports = {
  "/auth/register": require("./register"),
  "/auth/login": require("./logIn"),
  "/auth/logout": require("./logOut"),
  "/auth/current": require("./current"),
  "/auth/user": require("./updateUser"),
};
