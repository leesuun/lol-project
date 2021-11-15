"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _app = _interopRequireDefault(require("../app.js"));

var _logout = require("../controllers/userControllers/logout.js");

var _middleware = require("../middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.get("/logout", _middleware.protectMiddleware, _logout.logout);
var _default = userRouter;
exports["default"] = _default;