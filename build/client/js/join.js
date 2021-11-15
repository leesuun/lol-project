"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var form = document.getElementById("joinForm");
var userId = form.querySelector("#userId");
var stateId = form.querySelector("#stateId");
var password = form.querySelector("#password");
var statePass = form.querySelector("#statePass");
var password2 = form.querySelector("#password2");
var statePass2 = form.querySelector("#statePass2");
var nickname = form.querySelector("#nickname");
var ok = {
  id: false,
  password: false,
  password2: false,
  nickname: false
};
var inputId = "";
var inputPass = "";
var inputNickname = "";
var accountData = "";
userId.focus();

function inputError(state, element, stateMsg) {
  if (!state) {
    element.classList.add("red");
    element.classList.remove("green");
  } else {
    element.classList.add("green");
    element.classList.remove("red");
  }

  element.innerText = stateMsg;
}

var handleIdBlur = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var response, state;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputId = userId.value;
            _context.next = 3;
            return fetch("/api/join", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                userId: inputId !== "" ? inputId : "blank"
              })
            });

          case 3:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return response.json();

          case 7:
            state = _context.sent;
            console.log(state);
            ok.id = state.ok;
            inputError(ok.id, stateId, state.msg);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleIdBlur(_x) {
    return _ref.apply(this, arguments);
  };
}();

var handlePassBlur = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
    var response, state;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            inputPass = password.value;
            _context2.next = 3;
            return fetch("/api/join", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                password: inputPass !== "" ? inputPass : "blank"
              })
            });

          case 3:
            response = _context2.sent;

            if (!(response.status === 200)) {
              _context2.next = 10;
              break;
            }

            _context2.next = 7;
            return response.json();

          case 7:
            state = _context2.sent;
            ok.password = state.ok;
            inputError(ok.password, statePass, state.msg);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function handlePassBlur(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var handlePass2Blur = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(evnet) {
    var inputPass2, response, state;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            inputPass = password.value;
            inputPass2 = password2.value;
            _context3.next = 4;
            return fetch("/api/join", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                password2: inputPass2 !== "" ? inputPass2 : "blank",
                password: inputPass
              })
            });

          case 4:
            response = _context3.sent;

            if (!(response.status === 200)) {
              _context3.next = 11;
              break;
            }

            _context3.next = 8;
            return response.json();

          case 8:
            state = _context3.sent;
            ok.password2 = state.ok;
            inputError(ok.password2, statePass2, state.msg);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function handlePass2Blur(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var handleNicknameBlur = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            inputNickname = nickname.value;
            _context4.next = 3;
            return fetch("/api/join/nickname", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                nickname: inputNickname !== "" ? inputNickname : "!@#$"
              })
            });

          case 3:
            response = _context4.sent;

            if (!(response.status === 200)) {
              _context4.next = 10;
              break;
            }

            _context4.next = 7;
            return response.json();

          case 7:
            accountData = _context4.sent;
            ok.nickname = accountData.state.ok;
            inputError(ok.nickname, stateNickname, accountData.state.msg);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function handleNicknameBlur(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var handleSubmit = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(event) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(ok.id === false || ok.password === false || ok.password2 === false || ok.nickname === false)) {
              _context5.next = 5;
              break;
            }

            event.preventDefault();
            alert("입력 정보를 확인해 주세요.");
            _context5.next = 8;
            break;

          case 5:
            console.log(accountData);
            _context5.next = 8;
            return fetch("/join", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                statusCheck: "ok",
                userId: inputId,
                password: inputPass,
                accountData: accountData.accountData
              })
            });

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function handleSubmit(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

userId.addEventListener("blur", handleIdBlur);
password.addEventListener("blur", handlePassBlur);
password2.addEventListener("blur", handlePass2Blur);
nickname.addEventListener("blur", handleNicknameBlur);
form.addEventListener("submit", handleSubmit);