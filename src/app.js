import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";

const logger = morgan("dev");
const app = express();
const PORT = 8080;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/assets", express.static("assets"));
app.use(logger);
app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`http server loading.. http://localhost:${PORT}`);
});
