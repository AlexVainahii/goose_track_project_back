const schemas = require("./schemas");
const securitySchemes = require("./securitySchemes");
const parameters = require("./parameters");

module.exports = {
  components: {
    ...parameters,
    ...schemas,
    ...securitySchemes,
  },
};
