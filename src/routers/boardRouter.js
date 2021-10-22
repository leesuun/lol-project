import express from "express";

import {
    getBoard,
    seeWrite,
    postSearch,
    deletePosting,
} from "../controllers/boardController/board.js";
import { getWrite, postWrite } from "../controllers/boardController/write.js";

import { protectMiddleware } from "../middleware.js";

const boardRouter = express.Router();

boardRouter.route("/page=:page").get(getBoard);
boardRouter.post("/search/page=:page", postSearch);
boardRouter.get("/:id([a-z0-9]{24})/delete", protectMiddleware, deletePosting);

boardRouter
    .route("/write")
    .all(protectMiddleware)
    .get(getWrite)
    .post(postWrite);

boardRouter.get("/:id([a-z0-9]{24})/see", seeWrite);

export default boardRouter;
