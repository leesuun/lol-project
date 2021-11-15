"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getLotation() {
  return _getLotation.apply(this, arguments);
}

function _getLotation() {
  _getLotation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var LOTATION_URL, ALLCHAMPION_URL, lotationData, lotationNumber, allChampionInfo, allChampionAry, lotationImg, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            LOTATION_URL = "platform/v3/champion-rotations?api_key=".concat(process.env.API_KEY);
            ALLCHAMPION_URL = "".concat(process.env.LOL_CDN_URL, "data/en_US/champion.json");
            _context2.next = 4;
            return (0, _nodeFetch["default"])("".concat(process.env.LOL_BASE_URL).concat(LOTATION_URL));

          case 4:
            _context2.next = 6;
            return _context2.sent.json();

          case 6:
            lotationData = _context2.sent;
            lotationNumber = lotationData.freeChampionIds.map(function (key) {
              return String(key);
            });
            _context2.next = 10;
            return (0, _nodeFetch["default"])(ALLCHAMPION_URL, {});

          case 10:
            _context2.next = 12;
            return _context2.sent.json();

          case 12:
            allChampionInfo = _context2.sent;
            allChampionAry = Object.entries(allChampionInfo.data);
            lotationImg = [];

            for (i = 0; i < allChampionAry.length; i++) {
              if (lotationNumber.includes(allChampionAry[i][1].key)) {
                lotationImg.push(process.env.LOL_CDN_URL + "img/champion/" + allChampionAry[i][1].image.full);
              }
            }

            lotationImg.sort();
            return _context2.abrupt("return", lotationImg);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLotation.apply(this, arguments);
}

var home = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var lotationImgs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getLotation();

          case 2:
            lotationImgs = _context.sent;
            return _context.abrupt("return", res.render("home", {
              lotationImgs: lotationImgs
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.home = home;