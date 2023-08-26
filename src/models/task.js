const { Schema, model } = require("mongoose");
const service = require("@service");
const { schemas } = require("@schemas");

const taskShema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      max: 250,
    },
    start: {
      type: String,
      required: [true, "Start time is required"],
      match: [schemas.timeRegexp, "Start time do not match"],
    },
    end: {
      type: String,
      required: [true, "End time is required"],
      match: [schemas.timeRegexp, "End time do not match"],
    },
    priority: {
      type: String,
      required: [true, "Priority is required"],
      enum: ["LOW", "MEDIUM", "HIGH"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
      match: [schemas.dateRegexp, "Date do not match"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["TODO", "INPROGRESS", "DONE"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false}
);

taskShema.post("save", service.handleMongooseError);

const Task = model("task", taskShema);

module.exports = { Task };
