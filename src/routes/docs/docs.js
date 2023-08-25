const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("@src/docs");
const router = express.Router();

const options = {
  explorer: true,
  swaggerOptions: {
    url: `${process.env.BASE_URL}/docs/swagger.json`,
  },
};
router.get("/docs/swagger.json", (req, res) => res.json(swaggerDocument));

router.use("/docs", swaggerUi.serveFiles(swaggerDocument, options));
router.get("/docs", swaggerUi.setup(swaggerDocument, options));

module.exports = router;
