"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentSchema = new _mongoose["default"].Schema({
  text: {
    type: String,
    require: true,
    trim: true
  },
  createAt: {
    type: Date,
    require: true,
    "default": new Date()
  },
  nickname: {
    type: String,
    require: true,
    trim: true
  },
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    require: true,
    ref: "User"
  },
  posting: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    require: true,
    ref: "Post"
  }
});

var Comment = _mongoose["default"].model("Comment", commentSchema);

var _default = Comment;
exports["default"] = _default;