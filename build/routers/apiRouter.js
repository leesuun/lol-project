"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _join = require("../controllers/globalcontroller/join.js");

var _login = require("../controllers/globalcontroller/login.js");

var _board = require("../controllers/boardController/board.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = _express["default"].Router();

apiRouter.post("/join", _join.inputState);
apiRouter.post("/join/nickname", _join.inputNickname);
apiRouter.post("/login", _login.accountInfo);
apiRouter.post("/views", _board.registerViews);
apiRouter.post("/:id([a-z0-9]{24})/createComment", _board.createComment);
apiRouter["delete"]("/:id([a-z0-9]{24})/deleteComment", _board.deleteComment);
var _default = apiRouter;
exports["default"] = _default;