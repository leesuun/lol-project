import express from "express";

import { home } from "../controllers/globalcontroller/home.js";
import { getJoin, postJoin } from "../controllers/globalcontroller/join.js";
import { getLogin, postLogin } from "../controllers/globalcontroller/login.js";
import { ranking } from "../controllers/globalcontroller/ranking.js";

import {
    getSearch,
    postSearch,
} from "../controllers/globalcontroller/search.js";

import { protectMiddleware, publicMiddleware } from "../middleware.js";

const globalRouter = express.Router();

globalRouter.route("/").get(home);
globalRouter.route("/join").all(publicMiddleware).get(getJoin).post(postJoin);
globalRouter.route("/summoner/").get(getSearch).post(postSearch);
globalRouter
    .route("/login")
    .all(publicMiddleware)
    .get(getLogin)
    .post(postLogin);
globalRouter.get("/ranking/page=:page", ranking);

const riotAuth = (req, res) => {
    return res.render("riotAuth");
};

globalRouter.get("/riot.txt", riotAuth);

export default globalRouter;
