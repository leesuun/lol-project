import express from "express";

import { home } from "../controllers/globalcontroller/home.js";
import { getJoin, postJoin } from "../controllers/globalcontroller/join.js";
import { getLogin, postLogin } from "../controllers/globalcontroller/login.js";
import { getLotation } from "../controllers/globalcontroller/lotation.js";

import { protectMiddleware } from "../middleware.js";

const globalRouter = express.Router();

globalRouter.route("/").get(home);
globalRouter.route("/join").all(protectMiddleware).get(getJoin).post(postJoin);
globalRouter
    .route("/login")
    .all(protectMiddleware)
    .get(getLogin)
    .post(postLogin);

export default globalRouter;
