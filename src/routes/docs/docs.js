const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../docs");
const router = express.Router();

const options = {
  explorer: true,
  swaggerOptions: {
    url: `${process.env.BASE_URL}/docs/swagger.json`,
  },
};
router.get("/docs/swagger.json", (req, res) => res.json(swaggerDocument));

router.use("/docs", swaggerUi.serveFiles(null, options));
router.get("/docs", swaggerUi.setup(null, options));

module.exports = router;
