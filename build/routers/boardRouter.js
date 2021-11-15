"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _board = require("../controllers/boardController/board.js");

var _write = require("../controllers/boardController/write.js");

var _middleware = require("../middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var boardRouter = _express["default"].Router();

boardRouter.route("/page=:page").get(_board.getBoard);
boardRouter.post("/search/page=:page", _board.postSearch);
boardRouter.get("/:id([a-z0-9]{24})/delete", _middleware.protectMiddleware, _board.deletePosting);
boardRouter.route("/write").all(_middleware.protectMiddleware).get(_write.getWrite).post(_write.postWrite);
boardRouter.get("/:id([a-z0-9]{24})/see", _board.seeWrite);
var _default = boardRouter;
exports["default"] = _default;