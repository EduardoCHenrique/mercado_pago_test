const path = require("path");

module.exports = (config) => {
  config.resolve.alias["@root"] = path.resolve(__dirname, "src"); 
  return config;
}