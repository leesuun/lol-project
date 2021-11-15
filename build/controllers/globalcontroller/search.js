"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postSearch = exports.getSearch = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _constants = require("../../constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var team1 = [];
var team2 = [];

var getSearch = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var username, GAME_LIST_COUNT, GAME_PARTICIPANTS_COUNT, MATCH_2_URL, gameListInfo, soloInfo, flexInfo, ACCOUNT_URL, userInfo, RANKINFO_URL, rankInfo, i, MATCH_1_URL, gameList, _i, request, _i2, gameDetails, _i3, gameInfo, j, participantsInfo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("..");
            username = req.query.username;
            GAME_LIST_COUNT = 15;
            GAME_PARTICIPANTS_COUNT = 10;
            MATCH_2_URL = [];
            gameListInfo = [];
            // 유저 정보 (summonerId, accountId, puuid, name, profileiconId, revisionDate, summonerLevel)
            ACCOUNT_URL = "".concat(process.env.LOL_BASE_URL, "summoner/v4/summoners/by-name/").concat(username);
            _context.next = 9;
            return (0, _nodeFetch["default"])(ACCOUNT_URL, {
              headers: {
                "X-Riot-Token": process.env.API_KEY
              }
            });

          case 9:
            _context.next = 11;
            return _context.sent.json();

          case 11:
            userInfo = _context.sent;

            if (!("status" in userInfo)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.render("404"));

          case 14:
            RANKINFO_URL = "".concat(process.env.LOL_BASE_URL, "league/v4/entries/by-summoner/").concat(userInfo.id);
            _context.next = 17;
            return (0, _nodeFetch["default"])(RANKINFO_URL, {
              headers: {
                "X-Riot-Token": process.env.API_KEY
              }
            });

          case 17:
            _context.next = 19;
            return _context.sent.json();

          case 19:
            rankInfo = _context.sent;

            for (i = 0; i < rankInfo.length; i++) {
              if (rankInfo[i].queueType === "RANKED_SOLO_5x5") {
                soloInfo = rankInfo[i];
              } else if (rankInfo[i].queueType === "RANKED_FLEX_SR") {
                flexInfo = rankInfo[i];
              }
            } // 검색 유저 최근 20게임 정보


            MATCH_1_URL = "".concat(process.env.LOL_BASE_ASIA_URL, "match/v5/matches/by-puuid/").concat(userInfo.puuid, "/ids?start=0&count=").concat(GAME_LIST_COUNT);
            _context.next = 24;
            return (0, _nodeFetch["default"])(MATCH_1_URL, {
              headers: {
                "X-Riot-Token": process.env.API_KEY
              }
            });

          case 24:
            _context.next = 26;
            return _context.sent.json();

          case 26:
            gameList = _context.sent;

            // 최근 20게임 meta데이터
            for (_i = 0; _i < gameList.length; _i++) {
              MATCH_2_URL.push("".concat(process.env.LOL_BASE_ASIA_URL, "match/v5/matches/").concat(gameList[_i], "?api_key=").concat(process.env.API_KEY));
            }

            MATCH_2_URL = MATCH_2_URL.map(function (url) {
              return (0, _nodeFetch["default"])(url);
            });
            _context.next = 31;
            return Promise.all(MATCH_2_URL);

          case 31:
            request = _context.sent;
            _i2 = 0;

          case 33:
            if (!(_i2 < request.length)) {
              _context.next = 42;
              break;
            }

            _context.t0 = gameListInfo;
            _context.next = 37;
            return request[_i2].json();

          case 37:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

          case 39:
            _i2++;
            _context.next = 33;
            break;

          case 42:
            // return res.send(gameListInfo);
            // console.log(gameListInfo);
            gameDetails = [];
            team1 = [];
            team2 = [];

            for (_i3 = 0; _i3 < gameList.length; _i3++) {
              gameInfo = gameListInfo[_i3].info;

              for (j = 0; j < GAME_PARTICIPANTS_COUNT; j++) {
                participantsInfo = gameInfo.participants[j];

                if (participantsInfo.summonerName === userInfo.name) {
                  gameDetails.push({
                    gameInfo: {
                      gameType: gameInfo.queueId = _constants.QUEUETYPE[gameInfo.queueId],
                      gameCreation: gameInfo.gameCreation,
                      duration: gameInfo.gameDuration,
                      matchId: gameListInfo[_i3].metadata.matchId
                    },
                    basicSummoner: {
                      summonerName: participantsInfo.summonerName,
                      champion: participantsInfo.championName === "FiddleSticks" ? "Fiddlesticks" : participantsInfo.championName,
                      spells: {
                        first: _constants.SPELL[participantsInfo.summoner1Id],
                        second: _constants.SPELL[participantsInfo.summoner2Id]
                      },
                      rate: {
                        win: participantsInfo.win === true ? "승리" : "패배",
                        kills: participantsInfo.kills,
                        deaths: participantsInfo.deaths,
                        assists: participantsInfo.assists
                      },
                      items: {
                        item0: participantsInfo.item0,
                        item1: participantsInfo.item1,
                        item2: participantsInfo.item2,
                        item3: participantsInfo.item3,
                        item4: participantsInfo.item4,
                        item5: participantsInfo.item5,
                        itemSub: participantsInfo.item6
                      },
                      runes: {
                        main: {
                          style: _constants.RUNE[participantsInfo.perks.styles[0].style],
                          rune1: _constants.RUNE[participantsInfo.perks.styles[0].selections[0].perk],
                          rune2: _constants.RUNE[participantsInfo.perks.styles[0].selections[1].perk],
                          rune3: _constants.RUNE[participantsInfo.perks.styles[0].selections[2].perk],
                          rune4: _constants.RUNE[participantsInfo.perks.styles[0].selections[3].perk]
                        },
                        sub: {
                          style: _constants.RUNE[participantsInfo.perks.styles[1].style],
                          rune1: _constants.RUNE[participantsInfo.perks.styles[1].selections[0].perk],
                          rune2: _constants.RUNE[participantsInfo.perks.styles[1].selections[1].perk]
                        }
                      }
                    }
                  });
                }

                if (participantsInfo.teamId === 100) {
                  team1.push({
                    gameInfo: {
                      matchId: gameListInfo[_i3].metadata.matchId
                    },
                    basicSummoner: {
                      summonerName: participantsInfo.summonerName,
                      champion: participantsInfo.championName === "FiddleSticks" ? "Fiddlesticks" : participantsInfo.championName,
                      champLevel: participantsInfo.champLevel,
                      minionKills: participantsInfo.neutralMinionsKilled + participantsInfo.totalMinionsKilled,
                      getGold: participantsInfo.goldEarned,
                      spells: {
                        first: _constants.SPELL[participantsInfo.summoner1Id],
                        second: _constants.SPELL[participantsInfo.summoner2Id]
                      },
                      rate: {
                        win: participantsInfo.win === true ? "승리" : "패배",
                        kills: participantsInfo.kills,
                        deaths: participantsInfo.deaths,
                        assists: participantsInfo.assists
                      },
                      items: {
                        item0: participantsInfo.item0,
                        item1: participantsInfo.item1,
                        item2: participantsInfo.item2,
                        item3: participantsInfo.item3,
                        item4: participantsInfo.item4,
                        item5: participantsInfo.item5,
                        itemSub: participantsInfo.item6
                      },
                      runes: {
                        main: {
                          style: _constants.RUNE[participantsInfo.perks.styles[0].style]
                        },
                        sub: {
                          style: _constants.RUNE[participantsInfo.perks.styles[1].style]
                        }
                      }
                    }
                  });
                }

                if (participantsInfo.teamId === 200) {
                  team2.push({
                    gameInfo: {
                      matchId: gameListInfo[_i3].metadata.matchId
                    },
                    basicSummoner: {
                      summonerName: participantsInfo.summonerName,
                      champion: participantsInfo.championName === "FiddleSticks" ? "Fiddlesticks" : participantsInfo.championName,
                      champLevel: participantsInfo.champLevel,
                      minionKills: participantsInfo.neutralMinionsKilled + participantsInfo.totalMinionsKilled,
                      getGold: participantsInfo.goldEarned,
                      spells: {
                        first: _constants.SPELL[participantsInfo.summoner1Id],
                        second: _constants.SPELL[participantsInfo.summoner2Id]
                      },
                      rate: {
                        win: participantsInfo.win === true ? "승리" : "패배",
                        kills: participantsInfo.kills,
                        deaths: participantsInfo.deaths,
                        assists: participantsInfo.assists
                      },
                      items: {
                        item0: participantsInfo.item0,
                        item1: participantsInfo.item1,
                        item2: participantsInfo.item2,
                        item3: participantsInfo.item3,
                        item4: participantsInfo.item4,
                        item5: participantsInfo.item5,
                        itemSub: participantsInfo.item6
                      },
                      runes: {
                        main: {
                          style: _constants.RUNE[participantsInfo.perks.styles[0].style]
                        },
                        sub: {
                          style: _constants.RUNE[participantsInfo.perks.styles[1].style]
                        }
                      }
                    }
                  });
                }
              }
            } // return res.send(team2);
            // console.log(gameDetails);
            // return res.send(flexInfo);


            return _context.abrupt("return", res.render("search", {
              userInfo: userInfo,
              soloInfo: soloInfo,
              flexInfo: flexInfo,
              gameDetails: gameDetails
            }));

          case 47:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSearch(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSearch = getSearch;

var postSearch = function postSearch(req, res) {
  var btnId = req.body.btnId;
  var team = [[], []];

  for (var i = 0; i < team1.length; i++) {
    if (team1[i].gameInfo.matchId === btnId) {
      team[0].push(team1[i]);
    }
  }

  for (var _i4 = 0; _i4 < team2.length; _i4++) {
    if (team2[_i4].gameInfo.matchId === btnId) {
      team[1].push(team2[_i4]);
    }
  }

  res.send(team); // res.send(team2);
};

exports.postSearch = postSearch;