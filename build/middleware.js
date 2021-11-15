"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicMiddleware = exports.protectMiddleware = exports.localMiddleware = void 0;

var localMiddleware = function localMiddleware(req, res, next) {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user || {};
  res.locals.loggedInUserInfo = req.session.userInfo; // console.log(res.locals.loggedInUser);

  next();
};

exports.localMiddleware = localMiddleware;

var protectMiddleware = function protectMiddleware(req, res, next) {
  //비로그인 유저 기능 제한 미들웨어
  if (!res.locals.loggedIn) {
    return res.redirect("/");
  } else {
    next();
  }
};

exports.protectMiddleware = protectMiddleware;

var publicMiddleware = function publicMiddleware(req, res, next) {
  // 로그인 유저 페이지 이동 제한
  if (!res.locals.loggedIn) {
    next();
  } else {
    return res.redirect("/");
  }
};

exports.publicMiddleware = publicMiddleware;