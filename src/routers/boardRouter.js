import express from "express";

import { getBoard } from "../controllers/boardController/board.js";
import { getWrite, postWrite } from "../controllers/boardController/write.js";

import { protectMiddleware } from "../middleware.js";

const boardRouter = express.Router();

boardRouter.route("/page=:page").get(getBoard);

boardRouter
    .route("/write")
    .all(protectMiddleware)
    .get(getWrite)
    .post(postWrite);

export default boardRouter;
