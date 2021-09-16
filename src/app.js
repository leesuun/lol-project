import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";

const logger = morgan("dev");
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/assets", express.static("assets"));
app.use("/", globalRouter);

export default app;
