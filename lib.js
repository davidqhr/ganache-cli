// make sourcemaps work!
require("source-map-support/register");

module.exports = require("@davidqhr/ganache-core/public-exports.js");
module.exports.version = require("@davidqhr/ganache-core/package.json").version;
module.exports.to = require("@davidqhr/ganache-core/lib/utils/to");
