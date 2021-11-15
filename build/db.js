"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb://127.0.0.1:27017/cfs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

var db = _mongoose["default"].connection;

var error = function error(_error) {
  console.log("db err: ", _error);
};

db.on("error", error);
db.once("open", function () {
  return console.log("db on✅");
});