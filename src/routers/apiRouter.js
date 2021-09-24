import express from "express";

import {
    inputState,
    inputNickname,
} from "../controllers/globalcontroller/join.js";

const apiRouter = express.Router();

apiRouter.post("/join", inputState);
apiRouter.post("/join/nickname", inputNickname);

export default apiRouter;
