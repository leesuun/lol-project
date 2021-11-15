"use strict";

require("regenerator-runtime");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app.js"));

require("./db.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = 8080;

_app["default"].listen(PORT, function () {
  console.log("http server listening..\uD83D\uDE80 http://localhost:".concat(PORT));
});