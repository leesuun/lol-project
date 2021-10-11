import express from "express";

import {
    inputState,
    inputNickname,
} from "../controllers/globalcontroller/join.js";

import { accountInfo } from "../controllers/globalcontroller/login.js";

import {
    registerViews,
    createComment,
} from "../controllers/boardController/board.js";

const apiRouter = express.Router();

apiRouter.post("/join", inputState);
apiRouter.post("/join/nickname", inputNickname);
apiRouter.post("/login", accountInfo);
apiRouter.post("/views", registerViews);
apiRouter.post("/:id/createComment", createComment);

export default apiRouter;
