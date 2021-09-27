import express from "express";

import {
    inputState,
    inputNickname,
} from "../controllers/globalcontroller/join.js";

import { accountInfo } from "../controllers/globalcontroller/login.js";

const apiRouter = express.Router();

apiRouter.post("/join", inputState);
apiRouter.post("/join/nickname", inputNickname);
apiRouter.post("/login", accountInfo);

export default apiRouter;
