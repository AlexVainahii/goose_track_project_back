const expressAsyncHandler = require("express-async-handler");

const { getAllRev } = require("./getAllRev");
const { getOwnRev } = require("./getOwnRev");
const { postOwnRev } = require("./postOwnRev");
const { patchOwnRev } = require("./patchOwnRev");
const { deleteOwnRev } = require("./deleteOwnRev");

module.exports = {
  getAllRev: expressAsyncHandler(getAllRev),
  getOwnRev: expressAsyncHandler(getOwnRev),
  postOwnRev: expressAsyncHandler(postOwnRev),
  patchOwnRev: expressAsyncHandler(patchOwnRev),
  deleteOwnRev: expressAsyncHandler(deleteOwnRev),
};
