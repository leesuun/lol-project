"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.createComment = exports.registerViews = exports.deletePosting = exports.seeWrite = exports.postSearch = exports.getBoard = void 0;

var _Post = _interopRequireDefault(require("../../models/Post.js"));

var _User = _interopRequireDefault(require("../../models/User.js"));

var _Comment = _interopRequireDefault(require("../../models/Comment.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getBoard = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var page, limitCnt, skip, postings;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = Number(req.params.page);
            limitCnt = 15;
            skip = (page - 1) * limitCnt;
            postings = [];

            if (!(page <= 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.redirect("/"));

          case 6:
            _context.next = 8;
            return _Post["default"].find({}).sort({
              number: "desc"
            }).limit(limitCnt).skip(skip);

          case 8:
            postings = _context.sent;
            return _context.abrupt("return", res.render("board", {
              postings: postings,
              page: page
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBoard(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBoard = getBoard;

var postSearch = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, keyword, New, Popular, page, postings;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, keyword = _req$body.keyword, New = _req$body.New, Popular = _req$body.Popular;
            page = Number(req.params.page);
            postings = [];

            if (!keyword) {
              _context2.next = 9;
              break;
            }

            _context2.next = 6;
            return _Post["default"].find({
              title: {
                $regex: new RegExp("".concat(keyword), "i")
              }
            });

          case 6:
            postings = _context2.sent;
            _context2.next = 19;
            break;

          case 9:
            if (!(New === "")) {
              _context2.next = 15;
              break;
            }

            _context2.next = 12;
            return _Post["default"].find({}).sort({
              number: "desc"
            });

          case 12:
            postings = _context2.sent;
            _context2.next = 19;
            break;

          case 15:
            if (!(Popular === "")) {
              _context2.next = 19;
              break;
            }

            _context2.next = 18;
            return _Post["default"].find({}).sort({
              views: "desc"
            });

          case 18:
            postings = _context2.sent;

          case 19:
            if (!(page <= 0)) {
              _context2.next = 21;
              break;
            }

            return _context2.abrupt("return", res.redirect("/"));

          case 21:
            return _context2.abrupt("return", res.render("board", {
              postings: postings,
              page: page
            }));

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postSearch(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postSearch = postSearch;

var seeWrite = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, posting;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Post["default"].findById(id).populate("comments");

          case 3:
            posting = _context3.sent;
            console.log(posting);
            return _context3.abrupt("return", res.render("see-board", {
              posting: posting
            }));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function seeWrite(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.seeWrite = seeWrite;

var deletePosting = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _id, posting;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id, _id = req.session.user._id;
            console.log(_id);
            _context4.next = 4;
            return _Post["default"].findById(id);

          case 4:
            posting = _context4.sent;

            if (!(String(_id) == String(posting.owner))) {
              _context4.next = 10;
              break;
            }

            _context4.next = 8;
            return _Post["default"].findByIdAndDelete(id);

          case 8:
            _context4.next = 11;
            break;

          case 10:
            console.log("forbidden");

          case 11:
            return _context4.abrupt("return", res.redirect("/"));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deletePosting(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePosting = deletePosting;

var registerViews = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var postId, posting;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            postId = req.body.postId;
            _context5.next = 3;
            return _Post["default"].findById(postId);

          case 3:
            posting = _context5.sent;
            posting.views += 1;
            posting.save();

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function registerViews(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.registerViews = registerViews;

var createComment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, content, _id, commentInfo, posting, user, comment;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id, content = req.body.content, _id = req.session.user._id;
            commentInfo = {
              author: null,
              text: null,
              createAt: null,
              newCommentId: null
            };
            _context6.next = 4;
            return _Post["default"].findById(id);

          case 4:
            posting = _context6.sent;
            _context6.next = 7;
            return _User["default"].findById(_id);

          case 7:
            user = _context6.sent;
            _context6.next = 10;
            return _Comment["default"].create({
              text: content,
              createAt: new Date(),
              nickname: user.userId,
              owner: _id,
              posting: posting._id
            });

          case 10:
            comment = _context6.sent;
            commentInfo.author = comment.nickname;
            commentInfo.createAt = comment.createAt.toISOString().slice(0, 10);
            commentInfo.text = comment.text;
            commentInfo.newCommentId = comment._id;
            posting.comments.push(comment._id);
            _context6.next = 18;
            return posting.save();

          case 18:
            res.send(commentInfo);

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function createComment(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createComment = createComment;

var deleteComment = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var commentid, _id, comment;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            commentid = req.body.commentid, _id = req.session.user._id;
            _context7.next = 3;
            return _Comment["default"].findById(commentid);

          case 3:
            comment = _context7.sent;

            if (!(String(comment.owner) !== String(_id))) {
              _context7.next = 9;
              break;
            }

            // not owner
            res.sendStatus(403);
            console.log("not owner");
            _context7.next = 12;
            break;

          case 9:
            _context7.next = 11;
            return _Comment["default"].findByIdAndDelete({
              _id: commentid
            });

          case 11:
            res.sendStatus(200);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteComment(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteComment = deleteComment;