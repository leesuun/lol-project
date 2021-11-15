"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    require: true,
    trim: true
  },
  contents: {
    type: String,
    require: true,
    trim: true
  },
  createAt: {
    type: Date,
    "default": new Date()
  },
  author: {
    type: String,
    require: true,
    trim: true
  },
  views: {
    type: Number,
    require: true,
    "default": 0
  },
  profileIconId: {
    type: Number,
    "default": 2076
  },
  number: {
    type: Number,
    require: true
  },
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Post"
  },
  comments: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var Post = _mongoose["default"].model("Post", postSchema);

var _default = Post;
exports["default"] = _default;