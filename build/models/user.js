"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _regex = _interopRequireDefault(require("../regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userSchema = new _mongoose["default"].Schema({
  userId: {
    type: String,
    unique: true,
    require: true,
    trim: true,
    validate: {
      validator: function validator(userId) {
        return _regex["default"].userid.test(userId);
      }
    }
  },
  password: {
    type: String,
    trim: true,
    require: true // validate: {
    //     validator: function (password) {
    //         return regex.password.test(password);
    //     },
    // },

  },
  nickname: {
    type: String,
    require: true,
    trim: true
  },
  summonerId: {
    type: String,
    require: true,
    trim: true
  },
  accountId: {
    type: String,
    require: true,
    trim: true
  },
  puuId: {
    type: String,
    require: true,
    trim: true
  },
  posting: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Post"
  }],
  comments: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Comment"
  }]
});
userSchema.pre("save", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(next) {
    var saltRounds;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            saltRounds = Math.floor(Math.random() * 10);

            if (!this.isModified("password")) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return _bcrypt["default"].hash(this.password, saltRounds);

          case 4:
            this.password = _context.sent;

          case 5:
            next();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

var User = _mongoose["default"].model("User", userSchema);

var _default = User; // 유저 아이디 최소 1개씩 영문자(소,대), 숫자 포함한 6자이상 15자 이하
// 유저 패스워드 최소 1개씩 영문자(소,대), 숫자 또는 특수문자 포함한 6자이상 20자 이하
// 닉네임 개방 접근성 up

exports["default"] = _default;