"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _home = require("../controllers/globalcontroller/home.js");

var _join = require("../controllers/globalcontroller/join.js");

var _login = require("../controllers/globalcontroller/login.js");

var _ranking = require("../controllers/globalcontroller/ranking.js");

var _search = require("../controllers/globalcontroller/search.js");

var _middleware = require("../middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.route("/").get(_home.home);
globalRouter.route("/join").all(_middleware.publicMiddleware).get(_join.getJoin).post(_join.postJoin);
globalRouter.route("/summoner/").get(_search.getSearch).post(_search.postSearch);
globalRouter.route("/login").all(_middleware.publicMiddleware).get(_login.getLogin).post(_login.postLogin);
globalRouter.get("/ranking/page=:page", _ranking.ranking);
var _default = globalRouter;
exports["default"] = _default;