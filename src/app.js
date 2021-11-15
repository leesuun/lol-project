import express from "express";
import session from "express-session";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import http from "http";
import { Server, Socket } from "socket.io";

import apiRouter from "./routers/apiRouter.js";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import boardRouter from "./routers/boardRouter.js";

import { localMiddleware } from "./middleware.js";

const logger = morgan("dev");
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        // cookie: { secure: true }, secure - 브라우저가 HTTPS를 통해서만 쿠키를 보내도록 합니다.
        store: MongoStore.create({
            mongoUrl: "mongodb://127.0.0.1:27017/cfs",
        }),
    })
);

app.use(localMiddleware);
app.use("/assets", express.static("assets"));
app.use("/src/resource/webapp/ckeditor", express.static("ckeditor"));
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/board", boardRouter);
app.use("/api", apiRouter);

//socket code

const httpServer = http.createServer(app);

const wsServer = new Server(httpServer);

function publicRooms() {
    const {
        sockets: {
            adapter: { rooms, sids },
        },
    } = wsServer;

    const publicRooms = [];
    rooms.forEach((_, key) => {
        if (sids.get(key) === undefined) {
            publicRooms.push(key);
        }
    });

    return publicRooms;
}

function socketRoomsList(socket) {
    const rooms = socket.adapter.rooms;
    const sids = socket.adapter.sids;

    const publicRooms = [];
    rooms.forEach((_, key) => {
        if (sids.get(key) === undefined) {
            publicRooms.push(key);
        }
    });
    publicRooms.forEach((room) => {
        socket.leave(room);
    });
}

function roomCount(roomName) {
    return wsServer.sockets.adapter.rooms.get(roomName)?.size;
}

wsServer.on("connection", (socket) => {
    socket.onAny((event) => {
        console.log(event);
    });

    socket["nickname"] = "익명";

    socket.on("nickname", (nickname) => {
        socket["nickname"] = nickname;
    });

    socket.on("enter_room", (roomName, done) => {
        socketRoomsList(socket);
        socket.join(roomName);
        done(roomName, roomCount(roomName));
        socket
            .to(roomName)
            .emit(
                "welcome",
                `(${socket.nickname})님이 입장하셨습니다.`,
                roomCount(roomName)
            );
        wsServer.sockets.emit("room_change", publicRooms());
    });

    socket.on("new_message", (msg, roomName, done) => {
        socket
            .to(roomName)
            .emit("new_message", `(${socket.nickname}) : ${msg}`);
        done();
    });

    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) => {
            socket
                .to(room)
                .emit(
                    "bye",
                    `(${socket.nickname})님이 퇴장하셨습니다.`,
                    roomCount(room) - 1
                );
        });
    });

    // socket.on("disconnect", () => {
    //     wsServer.sockets.emit("room_change", publicRooms());
    // });
});

export default httpServer;
