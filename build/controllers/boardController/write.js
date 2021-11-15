"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postWrite = exports.getWrite = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

var _Post = _interopRequireDefault(require("../../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getWrite = function getWrite(req, res) {
  return res.render("write-board");
};

exports.getWrite = getWrite;

var postWrite = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, title, contents, _req$session, _id, profileIconId, user, postingLength, posting;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, contents = _req$body.contents, _req$session = req.session, _id = _req$session.user._id, profileIconId = _req$session.userInfo.profileIconId;
            _context.next = 3;
            return _User["default"].findById(_id);

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.redirect("/"));

          case 6:
            _context.next = 8;
            return _Post["default"].find({});

          case 8:
            postingLength = _context.sent;
            _context.next = 11;
            return _Post["default"].create({
              title: title,
              contents: contents,
              creatAt: new Date(),
              author: user.nickname,
              views: 0,
              profileIconId: profileIconId,
              owner: _id,
              number: postingLength.length
            });

          case 11:
            posting = _context.sent;
            user.posting.push(posting._id);
            _context.next = 15;
            return user.save();

          case 15:
            console.log(user);
            return _context.abrupt("return", res.redirect("/board/page=1"));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postWrite(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postWrite = postWrite;