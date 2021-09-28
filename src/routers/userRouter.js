import express from "express";
import app from "../app.js";

import { logout } from "../controllers/userControllers/logout.js";
import { publicMiddleware } from "../middleware.js";

const userRouter = express.Router();

userRouter.get("/logout", publicMiddleware, logout);

export default userRouter;
