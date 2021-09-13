import express from "express";

import { home } from "../controllers/globalcontroller/home";
import { getJoin, postJoin } from "../controllers/globalcontroller/join";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(getJoin).post(postJoin);

export default globalRouter;
