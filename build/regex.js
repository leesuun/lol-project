"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var regex = {
  userid: /^(?=.*[a-zA-Z])((?=.*\d)).{6,15}$/,
  password: /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
};
var _default = regex;
exports["default"] = _default;