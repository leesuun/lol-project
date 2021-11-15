"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var latestList = document.querySelectorAll("#latestList");
var detailBtn = document.querySelectorAll("#detailBtn");
var theadList = ["룬스펠", "소환사 정보", "아이템", "킬뎃", "미니언킬", "개인골드"];

var showDetail = function showDetail(teamList, targetBtn, btnId) {
  var team1 = teamList[0];
  var team2 = teamList[1];
  var hr = document.createElement("hr");
  var team1_table = document.createElement("table");
  team1_table.classList.add("table", "detail__table", "team1");
  var team1_thead = document.createElement("thead");
  var team1_thead_tr = document.createElement("tr");
  var team1_thead_td = [];

  for (var i = 0; i < 6; i++) {
    team1_thead_td[i] = document.createElement("td");
    team1_thead_td[i].innerText = theadList[i];
    team1_thead_tr.appendChild(team1_thead_td[i]);
  }

  team1_thead.appendChild(team1_thead_tr);
  var team1_tbody = document.createElement("tbody");
  var team1_tbody_tr = [];
  var team1_tbody_td = [[], [], [], [], []];

  for (var _i = 0; _i < 5; _i++) {
    for (var j = 0; j < 6; j++) {
      team1_tbody_td[_i][j] = document.createElement("td");
    }
  }

  console.log(team1[2]);

  for (var _i2 = 0; _i2 < 5; _i2++) {
    var td1_div1 = document.createElement("div");
    var td1_div2 = document.createElement("div");
    var td1_div2_img = document.createElement("img");
    var td1_div3 = document.createElement("div");
    var td1_div3_img1 = document.createElement("img");
    var td1_div3_img2 = document.createElement("img");
    td1_div1.classList.add("rune-spell");
    td1_div2.classList.add("runeStyle");
    td1_div3.classList.add("spell");
    td1_div2_img.src = "https://ddragon.leagueoflegends.com/cdn/img/".concat(team1[_i2].basicSummoner.runes.main.style);
    td1_div3_img1.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/".concat(team1[_i2].basicSummoner.spells.first, ".png");
    td1_div3_img2.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/".concat(team1[_i2].basicSummoner.spells.second, ".png");
    td1_div2.appendChild(td1_div2_img);
    td1_div3.appendChild(td1_div3_img1);
    td1_div3.appendChild(td1_div3_img2);
    td1_div1.appendChild(td1_div2);
    td1_div1.appendChild(td1_div3);

    team1_tbody_td[_i2][0].appendChild(td1_div1);

    var td2_div1 = document.createElement("div");
    var td2_div1_span1 = document.createElement("span");
    var td2_div1_img1 = document.createElement("img");
    var td2_div1_span2 = document.createElement("span");
    td2_div1.classList.add("championInfo");
    td2_div1_span1.classList.add("level");
    td2_div1_span2.classList.add("summonerName");
    td2_div1_span1.innerText = "".concat(team1[_i2].basicSummoner.champLevel);
    td2_div1_span2.innerText = "".concat(team1[_i2].basicSummoner.summonerName);
    td2_div1_img1.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/".concat(team1[_i2].basicSummoner.champion, ".png");
    td2_div1.appendChild(td2_div1_span1);
    td2_div1.appendChild(td2_div1_img1);
    td2_div1.appendChild(td2_div1_span2);

    team1_tbody_td[_i2][1].appendChild(td2_div1);

    var td3_div1 = document.createElement("div");
    var td3_div1_img1 = document.createElement("img");
    var td3_div1_img2 = document.createElement("img");
    var td3_div1_img3 = document.createElement("img");
    var td3_div1_img4 = document.createElement("img");
    var td3_div1_img5 = document.createElement("img");
    var td3_div1_img6 = document.createElement("img");
    var td3_div1_img7 = document.createElement("img");
    td3_div1.classList.add("items");
    td3_div1_img1.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team1[_i2].basicSummoner.items.item0, ".png");
    td3_div1_img2.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team1[_i2].basicSummoner.items.item1, ".png");
    td3_div1_img3.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team1[_i2].basicSummoner.items.item2, ".png");
    td3_div1_img4.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team1[_i2].basicSummoner.items.item3, ".png");
    td3_div1_img5.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team1[_i2].basicSummoner.items.item4, ".png");
    td3_div1_img6.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team1[_i2].basicSummoner.items.item5, ".png");
    td3_div1_img7.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team1[_i2].basicSummoner.items.itemSub, ".png");
    td3_div1.appendChild(td3_div1_img1);
    td3_div1.appendChild(td3_div1_img2);
    td3_div1.appendChild(td3_div1_img3);
    td3_div1.appendChild(td3_div1_img4);
    td3_div1.appendChild(td3_div1_img5);
    td3_div1.appendChild(td3_div1_img6);
    td3_div1.appendChild(td3_div1_img7);

    team1_tbody_td[_i2][2].appendChild(td3_div1);

    var td4_div1 = document.createElement("div");
    var td4_div1_span = document.createElement("span");
    td4_div1.classList.add("grade");
    td4_div1_span.innerText = "".concat(team1[_i2].basicSummoner.rate.kills, " / ").concat(team1[_i2].basicSummoner.rate.deaths, " / ").concat(team1[_i2].basicSummoner.rate.deaths);
    td4_div1.appendChild(td4_div1_span);

    team1_tbody_td[_i2][3].appendChild(td4_div1);

    var td5_div1 = document.createElement("div");
    var td5_div1_span = document.createElement("span");
    td5_div1.classList.add("minionKills");
    td5_div1_span.innerText = "".concat(team1[_i2].basicSummoner.minionKills);
    td5_div1.appendChild(td5_div1_span);

    team1_tbody_td[_i2][4].appendChild(td5_div1);

    var td6_div1 = document.createElement("div");
    var td6_div1_span = document.createElement("span");
    td6_div1.classList.add("gold");
    td6_div1_span.innerText = "".concat(team1[_i2].basicSummoner.getGold);
    td6_div1.appendChild(td6_div1_span);

    team1_tbody_td[_i2][5].appendChild(td6_div1);
  }

  for (var _i3 = 0; _i3 < 5; _i3++) {
    team1_tbody_tr[_i3] = document.createElement("tr");
  }

  for (var _i4 = 0; _i4 < 5; _i4++) {
    for (var _j = 0; _j < 6; _j++) {
      team1_tbody_tr[_i4].appendChild(team1_tbody_td[_i4][_j]);
    }
  }

  for (var _i5 = 0; _i5 < 5; _i5++) {
    team1_tbody.appendChild(team1_tbody_tr[_i5]);
  }

  team1_table.appendChild(team1_thead);
  team1_table.appendChild(team1_tbody); ///////////////////

  var team2_table = document.createElement("table");
  team2_table.classList.add("table", "detail__table", "team2");
  var team2_thead = document.createElement("thead");
  var team2_thead_tr = document.createElement("tr");
  var team2_thead_td = [];

  for (var _i6 = 0; _i6 < 6; _i6++) {
    team2_thead_td[_i6] = document.createElement("td");
    team2_thead_td[_i6].innerText = theadList[_i6];
    team2_thead_tr.appendChild(team2_thead_td[_i6]);
  }

  team2_thead.appendChild(team2_thead_tr);
  var team2_tbody = document.createElement("tbody");
  var team2_tbody_tr = [];
  var team2_tbody_td = [[], [], [], [], []];

  for (var _i7 = 0; _i7 < 5; _i7++) {
    for (var _j2 = 0; _j2 < 6; _j2++) {
      team2_tbody_td[_i7][_j2] = document.createElement("td");
    }
  }

  console.log(team2[2]);

  for (var _i8 = 0; _i8 < 5; _i8++) {
    var _td1_div = document.createElement("div");

    var _td1_div2 = document.createElement("div");

    var _td1_div2_img = document.createElement("img");

    var _td1_div3 = document.createElement("div");

    var _td1_div3_img = document.createElement("img");

    var _td1_div3_img2 = document.createElement("img");

    _td1_div.classList.add("rune-spell");

    _td1_div2.classList.add("runeStyle");

    _td1_div3.classList.add("spell");

    _td1_div2_img.src = "https://ddragon.leagueoflegends.com/cdn/img/".concat(team2[_i8].basicSummoner.runes.main.style);
    _td1_div3_img.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/".concat(team2[_i8].basicSummoner.spells.first, ".png");
    _td1_div3_img2.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/".concat(team2[_i8].basicSummoner.spells.second, ".png");

    _td1_div2.appendChild(_td1_div2_img);

    _td1_div3.appendChild(_td1_div3_img);

    _td1_div3.appendChild(_td1_div3_img2);

    _td1_div.appendChild(_td1_div2);

    _td1_div.appendChild(_td1_div3);

    team2_tbody_td[_i8][0].appendChild(_td1_div);

    var _td2_div = document.createElement("div");

    var _td2_div1_span = document.createElement("span");

    var _td2_div1_img = document.createElement("img");

    var _td2_div1_span2 = document.createElement("span");

    _td2_div.classList.add("championInfo");

    _td2_div1_span.classList.add("level");

    _td2_div1_span2.classList.add("summonerName");

    _td2_div1_span.innerText = "".concat(team2[_i8].basicSummoner.champLevel);
    _td2_div1_span2.innerText = "".concat(team2[_i8].basicSummoner.summonerName);
    _td2_div1_img.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/".concat(team2[_i8].basicSummoner.champion, ".png");

    _td2_div.appendChild(_td2_div1_span);

    _td2_div.appendChild(_td2_div1_img);

    _td2_div.appendChild(_td2_div1_span2);

    team2_tbody_td[_i8][1].appendChild(_td2_div);

    var _td3_div = document.createElement("div");

    var _td3_div1_img = document.createElement("img");

    var _td3_div1_img2 = document.createElement("img");

    var _td3_div1_img3 = document.createElement("img");

    var _td3_div1_img4 = document.createElement("img");

    var _td3_div1_img5 = document.createElement("img");

    var _td3_div1_img6 = document.createElement("img");

    var _td3_div1_img7 = document.createElement("img");

    _td3_div.classList.add("items");

    _td3_div1_img.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team2[_i8].basicSummoner.items.item0, ".png");
    _td3_div1_img2.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team2[_i8].basicSummoner.items.item1, ".png");
    _td3_div1_img3.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team2[_i8].basicSummoner.items.item2, ".png");
    _td3_div1_img4.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team2[_i8].basicSummoner.items.item3, ".png");
    _td3_div1_img5.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team2[_i8].basicSummoner.items.item4, ".png");
    _td3_div1_img6.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team2[_i8].basicSummoner.items.item5, ".png");
    _td3_div1_img7.src = "http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/".concat(team2[_i8].basicSummoner.items.itemSub, ".png");

    _td3_div.appendChild(_td3_div1_img);

    _td3_div.appendChild(_td3_div1_img2);

    _td3_div.appendChild(_td3_div1_img3);

    _td3_div.appendChild(_td3_div1_img4);

    _td3_div.appendChild(_td3_div1_img5);

    _td3_div.appendChild(_td3_div1_img6);

    _td3_div.appendChild(_td3_div1_img7);

    team2_tbody_td[_i8][2].appendChild(_td3_div);

    var _td4_div = document.createElement("div");

    var _td4_div1_span = document.createElement("span");

    _td4_div.classList.add("grade");

    _td4_div1_span.innerText = "".concat(team2[_i8].basicSummoner.rate.kills, " / ").concat(team2[_i8].basicSummoner.rate.deaths, " / ").concat(team2[_i8].basicSummoner.rate.deaths);

    _td4_div.appendChild(_td4_div1_span);

    team2_tbody_td[_i8][3].appendChild(_td4_div);

    var _td5_div = document.createElement("div");

    var _td5_div1_span = document.createElement("span");

    _td5_div.classList.add("minionKills");

    _td5_div1_span.innerText = "".concat(team2[_i8].basicSummoner.minionKills);

    _td5_div.appendChild(_td5_div1_span);

    team2_tbody_td[_i8][4].appendChild(_td5_div);

    var _td6_div = document.createElement("div");

    var _td6_div1_span = document.createElement("span");

    _td6_div.classList.add("gold");

    _td6_div1_span.innerText = "".concat(team2[_i8].basicSummoner.getGold);

    _td6_div.appendChild(_td6_div1_span);

    team2_tbody_td[_i8][5].appendChild(_td6_div);
  }

  for (var _i9 = 0; _i9 < 5; _i9++) {
    team2_tbody_tr[_i9] = document.createElement("tr");
  }

  for (var _i10 = 0; _i10 < 5; _i10++) {
    for (var _j3 = 0; _j3 < 6; _j3++) {
      team2_tbody_tr[_i10].appendChild(team2_tbody_td[_i10][_j3]);
    }
  }

  for (var _i11 = 0; _i11 < 5; _i11++) {
    team2_tbody.appendChild(team2_tbody_tr[_i11]);
  }

  team2_table.appendChild(team2_thead);
  team2_table.appendChild(team2_tbody);
  var division = document.createElement("div");
  division.classList.add("division");
  division.innerText = "VS";

  if (team1[0].basicSummoner.rate.win === "승리") {
    team1_table.style.background = "#A3CFEC";
    team2_table.style.background = "#E2B6B3";
  } else {
    team1_table.style.background = "#E2B6B3";
    team2_table.style.background = "#A3CFEC";
  }

  latestList.forEach(function (element) {
    if (element.dataset.id === btnId) {
      element.appendChild(hr);
      element.appendChild(team1_table);
      element.appendChild(division);
      element.appendChild(team2_table);
    }
  });
  targetBtn.removeEventListener("click", handleDetailShow);
  targetBtn.addEventListener("click", function handleDetailHide(e) {
    hr.remove();
    team1_table.remove();
    division.remove();
    team2_table.remove();
    targetBtn.addEventListener("click", handleDetailShow);
  });
};

var handleDetailShow = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var btnId, targetBtn, response, i, teamList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            btnId = event.target.dataset.id;
            targetBtn = event.target;
            i = 0;

          case 3:
            if (!(i < latestList.length)) {
              _context.next = 11;
              break;
            }

            if (!(btnId === latestList[i].dataset.id)) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return fetch("/summoner/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                btnId: btnId
              })
            });

          case 7:
            response = _context.sent;

          case 8:
            i++;
            _context.next = 3;
            break;

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            teamList = _context.sent;
            showDetail(teamList, targetBtn, btnId);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleDetailShow(_x) {
    return _ref.apply(this, arguments);
  };
}();

detailBtn.forEach(function (element) {
  element.addEventListener("click", handleDetailShow);
});