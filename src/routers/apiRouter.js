import express from "express";

import {
    inputState,
    inputNickname,
} from "../controllers/globalcontroller/join.js";

import { accountInfo } from "../controllers/globalcontroller/login.js";
import { getLotation } from "../controllers/globalcontroller/home.js";

import {
    registerViews,
    createComment,
    deleteComment,
} from "../controllers/boardController/board.js";

const apiRouter = express.Router();

apiRouter.post("/join", inputState);
apiRouter.post("/join/nickname", inputNickname);
apiRouter.post("/login", accountInfo);
apiRouter.post("/views", registerViews);
apiRouter.post("/:id([a-z0-9]{24})/createComment", createComment);
apiRouter.delete("/:id([a-z0-9]{24})/deleteComment", deleteComment);

apiRouter.post("/getLotation", getLotation);

export default apiRouter;
