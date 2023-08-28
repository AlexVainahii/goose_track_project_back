module.exports = {
  "/": require("./getAllRev"),
  "/own(get)": require("./getOwnRev"),
  "/own(post)": require("./postOwnRev"),
  "/own(patch)": require("./patchOwnRev"),
  "/own(delete)": require("./deleteOwnRev"),
};
