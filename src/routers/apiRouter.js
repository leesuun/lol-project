import express from "express";

import { inputState } from "../controllers/globalcontroller/join";

const apiRouter = express.Router();

apiRouter.post("/join", inputState);

export default apiRouter;
