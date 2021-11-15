"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var form = document.getElementById("loginForm");
var userId = form.querySelector("#userId");
var password = form.querySelector("#password");
var submitState = form.querySelector("#submitState");
var successId = null;
var successPass = null;
var ok = false;
var msg = null;

var hnaldePassBlur = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var response, state;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                userId: userId.value === "" ? "!@#$" : userId.value,
                password: password.value === "" ? "!@#$" : password.value
              })
            });

          case 2:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 6;
            return response.json();

          case 6:
            state = _context.sent;
            ok = state.ok;
            msg = state.msg;
            successId = state.successId;
            successPass = state.successPass;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hnaldePassBlur(_x) {
    return _ref.apply(this, arguments);
  };
}();

var handleSubmit = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (ok) {
              _context2.next = 6;
              break;
            }

            event.preventDefault();
            submitState.innerText = msg;
            submitState.classList.add("red");
            _context2.next = 8;
            break;

          case 6:
            _context2.next = 8;
            return fetch("/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                ok: ok,
                successId: successId,
                successPass: successPass
              })
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function handleSubmit(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); // userId.addEventListener("blur", handleIdBlur);


password.addEventListener("blur", hnaldePassBlur);
form.addEventListener("submit", handleSubmit);