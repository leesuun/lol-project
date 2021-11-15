"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accountInfo = exports.postLogin = exports.getLogin = void 0;

var _User = _interopRequireDefault(require("../../models/User.js"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getLogin = function getLogin(req, res) {
  return res.render("login");
};

exports.getLogin = getLogin;

var postLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, successId, userId, user, ACCOUNT_URL, userInfo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, successId = _req$body.successId, userId = _req$body.userId;

            _User["default"].init();

            _context.next = 4;
            return _User["default"].findOne({
              userId: userId
            });

          case 4:
            _context.t0 = _context.sent;

            if (!(_context.t0 === null)) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return _User["default"].findOne({
              userId: successId
            });

          case 8:
            _context.t1 = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.next = 13;
            return _User["default"].findOne({
              userId: userId
            }).populate("posting");

          case 13:
            _context.t1 = _context.sent;

          case 14:
            user = _context.t1;
            _context.next = 17;
            return user.save();

          case 17:
            console.log(user);
            ACCOUNT_URL = "summoner/v4/summoners/by-account/".concat(user.accountId, "?api_key=").concat(process.env.API_KEY);
            _context.next = 21;
            return (0, _nodeFetch["default"])("".concat(process.env.LOL_BASE_URL).concat(ACCOUNT_URL));

          case 21:
            _context.next = 23;
            return _context.sent.json();

          case 23:
            userInfo = _context.sent;
            req.session.loggedIn = true;
            req.session.user = user;
            req.session.userInfo = userInfo; // console.log(req.session);

            return _context.abrupt("return", res.redirect("/"));

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postLogin = postLogin;

var accountInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, userId, password, state, user, math;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, userId = _req$body2.userId, password = _req$body2.password;
            state = {
              msg: null,
              ok: false,
              successId: null,
              successPass: null
            };
            _context2.next = 4;
            return _User["default"].findOne({
              userId: userId
            });

          case 4:
            user = _context2.sent;

            if (!(userId === "!@#$" || password === "!@#$")) {
              _context2.next = 9;
              break;
            }

            state.msg = "아이디 / 패스워드를 입력해주세요.";
            _context2.next = 17;
            break;

          case 9:
            if (user) {
              _context2.next = 13;
              break;
            }

            state.msg = "존재하지 않는 계정입니다.";
            _context2.next = 17;
            break;

          case 13:
            _context2.next = 15;
            return _bcrypt["default"].compare(password, user.password);

          case 15:
            math = _context2.sent;

            if (!math) {
              state.msg = "아이디 또는 비밀번호가 잘못 입력 되었습니다.";
            } else {
              state.ok = true;
              state.successId = userId;
              state.successPass = password;
            }

          case 17:
            res.send(state);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function accountInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.accountInfo = accountInfo;