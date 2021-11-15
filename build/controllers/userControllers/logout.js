"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = void 0;

var logout = function logout(req, res) {
  req.session.loggedIn = false;
  req.session.user = null;
  return res.redirect("/");
};

exports.logout = logout;