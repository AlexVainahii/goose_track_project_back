// module.exports = {
//   "/": require("./getAllRev"),
//   "/own(get)": require("./getOwnRev"),
//   "/own(post)": require("./postOwnRev"),
//   "/own(patch)": require("./patchOwnRev"),
//   "/own(delete)": require("./deleteOwnRev"),
// };

const getAllRev = require("./getAllRev");
const getOwnRev = require("./getOwnRev");
const postOwnRev = require("./postOwnRev");
const patchOwnRev = require("./patchOwnRev");
const deleteOwnRev = require("./deleteOwnRev");

module.exports = {
  "/reviews": { ...getAllRev },
  "/reviews/own": {
    ...getOwnRev,
    ...postOwnRev,
    ...patchOwnRev,
    ...deleteOwnRev,
  },
};
