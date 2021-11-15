"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputNickname = exports.inputState = exports.postJoin = exports.getJoin = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _User = _interopRequireDefault(require("../../models/User"));

var _regex = _interopRequireDefault(require("../../regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getJoin = function getJoin(req, res) {
  return res.render("join");
};

exports.getJoin = getJoin;

var postJoin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, userId, password, accountData, statusCheck, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, userId = _req$body.userId, password = _req$body.password, accountData = _req$body.accountData, statusCheck = _req$body.statusCheck;

            if (!statusCheck) {
              _context.next = 11;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return _User["default"].create({
              userId: userId,
              password: password,
              summonerId: accountData.id,
              accountId: accountData.accountId,
              puuId: accountData.puuid,
              nickname: accountData.name
            });

          case 5:
            user = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 11:
            return _context.abrupt("return", res.redirect("/login"));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function postJoin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postJoin = postJoin;

var inputState = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, userId, password, password2, state, user;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, userId = _req$body2.userId, password = _req$body2.password, password2 = _req$body2.password2;
            state = {
              msg: null,
              ok: false
            };
            _context2.next = 4;
            return _User["default"].findOne({
              userId: userId
            });

          case 4:
            user = _context2.sent;

            if (userId) {
              state.ok = false;

              if (user) {
                state.msg = "이미 사용중이거나 탈퇴한 아이디입니다.";
              } else if (userId === "blank") {
                state.msg = "필수 입력 항목입니다.";
              } else if (!_regex["default"].userid.test(userId)) {
                state.msg = "6~15자 영문,숫자가 포함되어야 합니다.";
              } else {
                state.msg = "사용가능한 아이디 입니다.";
                state.ok = true;
              }
            }

            if (password) {
              state.ok = false;

              if (password === "blank") {
                state.msg = "필수 입력 항목입니다.";
              } else if (!_regex["default"].password.test(password)) {
                state.msg = "6~20자 영문, 숫자 또는 특수문자가 포함되어야 합니다.";
              } else {
                state.msg = "사용가능한 비밀번호 입니다.";
                state.ok = true;
              }
            }

            if (password2) {
              state.ok = false;

              if (password2 === "blank") {
                state.msg = "필수 입력 항목입니다.";
              } else if (password !== password2) {
                state.msg = "일치하지 않는 비밀번호입니다.";
              } else {
                state.msg = "비밀번호가 일치 합니다.";
                state.ok = true;
              }
            }

            res.send(state);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function inputState(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.inputState = inputState;

var inputNickname = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var nickname, state, ACCOUNT_URL, accountData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            nickname = req.body.nickname;
            state = {
              msg: null,
              ok: false
            };
            ACCOUNT_URL = "summoner/v4/summoners/by-name/".concat(nickname, "?api_key=").concat(process.env.API_KEY);
            _context3.next = 5;
            return (0, _nodeFetch["default"])("".concat(process.env.LOL_BASE_URL).concat(ACCOUNT_URL));

          case 5:
            _context3.next = 7;
            return _context3.sent.json();

          case 7:
            accountData = _context3.sent;

            if (nickname) {
              state.ok = false;

              if (nickname === "!@#$") {
                state.msg = "필수 입력 항목입니다.";
              } else if (accountData.status) {
                state.msg = "존재하지 않는 소환사 입니다.";
              } else {
                state.msg = "유효한 소환사명 입니다.";
                state.ok = true;
              }
            }

            res.send({
              state: state,
              accountData: accountData
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function inputNickname(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // 공백 해결


exports.inputNickname = inputNickname;