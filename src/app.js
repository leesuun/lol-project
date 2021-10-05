import express from "express";
import session from "express-session";
import morgan from "morgan";
import MongoStore from "connect-mongo";

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

export default app;
