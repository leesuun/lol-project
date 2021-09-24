import express from "express";
import morgan from "morgan";

import apiRouter from "./routers/apiRouter.js";
import globalRouter from "./routers/globalRouter.js";

const logger = morgan("dev");
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

app.use("/assets", express.static("assets"));
app.use("/", globalRouter);
app.use("/api", apiRouter);

export default app;
