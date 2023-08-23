const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { usersRouter, reviewsRouter, tasksRouter } = require("./routes");
require("dotenv").config();
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/reviews", reviewsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
