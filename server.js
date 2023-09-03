const app = require("./app");

require("module-alias/register");
const mongoose = require("mongoose");
require("colors");
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(process.env.PORT ?? 5000);
    console.log(
      `Server connection on port ${process.env.PORT ?? 5000} successful`.bold
        .green.italic
    );
  })
  .catch((error) => {
    console.error(
      "Error connecting to MongoDB: ".bold.red.italic,
      error.message.bold.red.italic
    );
    process.exit(1);
  });
