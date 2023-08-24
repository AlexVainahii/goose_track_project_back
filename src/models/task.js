const { Schema, model } = require("mongoose");
const service = require("../service");

const taskShema = new Schema(
  {
    owner: {},
    title: {},
    start: {},
    end: {},
    priority: {},
    date: {},
    category: {},
  },
  { versionKey: false, timestamps: true }
);

taskShema.post("save", service.handleMongooseError);

const Task = model("task", taskShema);

module.exports = { Task };
