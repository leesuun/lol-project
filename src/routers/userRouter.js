import express from "express";
import app from "../app.js";

import { logout } from "../controllers/userControllers/logout.js";

const userRouter = express.Router();

userRouter.get("/logout", logout);

export default userRouter;
