import express from "express";

import { home } from "../controllers/globalcontroller/home.js";
import { getJoin, postJoin } from "../controllers/globalcontroller/join.js";
import { getLogin, postLogin } from "../controllers/globalcontroller/login.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(getLogin).post(postLogin);

export default globalRouter;
