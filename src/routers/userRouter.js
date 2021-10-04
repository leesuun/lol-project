import express from "express";
import app from "../app.js";

import { logout } from "../controllers/userControllers/logout.js";
import { protectMiddleware } from "../middleware.js";

const userRouter = express.Router();

userRouter.get("/logout", protectMiddleware, logout);

export default userRouter;
