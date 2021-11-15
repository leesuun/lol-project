"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _morgan = _interopRequireDefault(require("morgan"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _http = _interopRequireDefault(require("http"));

var _socket = require("socket.io");

var _apiRouter = _interopRequireDefault(require("./routers/apiRouter.js"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter.js"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter.js"));

var _boardRouter = _interopRequireDefault(require("./routers/boardRouter.js"));

var _middleware = require("./middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logger = (0, _morgan["default"])("dev");
var app = (0, _express["default"])();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(logger);
app.use((0, _expressSession["default"])({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }, secure - 브라우저가 HTTPS를 통해서만 쿠키를 보내도록 합니다.
  store: _connectMongo["default"].create({
    mongoUrl: "mongodb://127.0.0.1:27017/cfs"
  })
}));
app.use(_middleware.localMiddleware);
app.use("/assets", _express["default"]["static"]("assets"));
app.use("/src/resource/webapp/ckeditor", _express["default"]["static"]("ckeditor"));
app.use("/", _globalRouter["default"]);
app.use("/user", _userRouter["default"]);
app.use("/board", _boardRouter["default"]);
app.use("/api", _apiRouter["default"]); //socket code

var httpServer = _http["default"].createServer(app);

var wsServer = new _socket.Server(httpServer);

function publicRooms() {
  var _wsServer$sockets$ada = wsServer.sockets.adapter,
      rooms = _wsServer$sockets$ada.rooms,
      sids = _wsServer$sockets$ada.sids;
  var publicRooms = [];
  rooms.forEach(function (_, key) {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

function socketRoomsList(socket) {
  var rooms = socket.adapter.rooms;
  var sids = socket.adapter.sids;
  var publicRooms = [];
  rooms.forEach(function (_, key) {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  publicRooms.forEach(function (room) {
    socket.leave(room);
  });
}

function roomCount(roomName) {
  var _wsServer$sockets$ada2;

  return (_wsServer$sockets$ada2 = wsServer.sockets.adapter.rooms.get(roomName)) === null || _wsServer$sockets$ada2 === void 0 ? void 0 : _wsServer$sockets$ada2.size;
}

wsServer.on("connection", function (socket) {
  socket.onAny(function (event) {
    console.log(event);
  });
  socket["nickname"] = "익명";
  socket.on("nickname", function (nickname) {
    socket["nickname"] = nickname;
  });
  socket.on("enter_room", function (roomName, done) {
    socketRoomsList(socket);
    socket.join(roomName);
    done(roomName, roomCount(roomName));
    socket.to(roomName).emit("welcome", "(".concat(socket.nickname, ")\uB2D8\uC774 \uC785\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4."), roomCount(roomName));
    wsServer.sockets.emit("room_change", publicRooms());
  });
  socket.on("new_message", function (msg, roomName, done) {
    socket.to(roomName).emit("new_message", "(".concat(socket.nickname, ") : ").concat(msg));
    done();
  });
  socket.on("disconnecting", function () {
    socket.rooms.forEach(function (room) {
      socket.to(room).emit("bye", "(".concat(socket.nickname, ")\uB2D8\uC774 \uD1F4\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4."), roomCount(room) - 1);
    });
  }); // socket.on("disconnect", () => {
  //     wsServer.sockets.emit("room_change", publicRooms());
  // });
});
var _default = httpServer;
exports["default"] = _default;