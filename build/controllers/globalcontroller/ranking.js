"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ranking = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ranking = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var page, RANKING_URL, response, data, challenger, limit, skip, ACCOUNT_URL, i, request, _i, addData;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = Number(req.params.page);
            RANKING_URL = "league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=".concat(process.env.API_KEY);
            _context.next = 4;
            return (0, _nodeFetch["default"])("".concat(process.env.LOL_BASE_URL).concat(RANKING_URL));

          case 4:
            response = _context.sent;
            data = null;
            challenger = null;
            limit = 50;
            skip = page * limit;

            if (!(1 > page || page > 6)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.redirect("/"));

          case 11:
            if (!(response.status === 200)) {
              _context.next = 16;
              break;
            }

            _context.next = 14;
            return response.json();

          case 14:
            data = _context.sent;
            challenger = data.entries.sort(function (a, b) {
              return b.leaguePoints - a.leaguePoints;
            });

          case 16:
            ACCOUNT_URL = [];

            if (!(page === 1)) {
              _context.next = 33;
              break;
            }

            for (i = 0; i < 3; i++) {
              ACCOUNT_URL.push("".concat(process.env.LOL_BASE_URL, "summoner/v4/summoners/").concat(challenger[i].summonerId, "?api_key=").concat(process.env.API_KEY));
            }

            ACCOUNT_URL = ACCOUNT_URL.map(function (url) {
              return (0, _nodeFetch["default"])(url);
            });
            _context.next = 22;
            return Promise.all(ACCOUNT_URL);

          case 22:
            request = _context.sent;
            _i = 0;

          case 24:
            if (!(_i < request.length)) {
              _context.next = 33;
              break;
            }

            _context.next = 27;
            return request[_i].json();

          case 27:
            addData = _context.sent;
            challenger[_i].profileIconId = addData.profileIconId;
            challenger[_i].summonerLevel = addData.summonerLevel;

          case 30:
            _i++;
            _context.next = 24;
            break;

          case 33:
            if (page >= 1) {
              challenger = challenger.slice(skip - limit, skip);
            }

            return _context.abrupt("return", res.render("ranking", {
              page: page,
              challenger: challenger
            }));

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ranking(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.ranking = ranking;