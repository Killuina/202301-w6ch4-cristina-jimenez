import { Router } from "express";
import { getThingsAlreadyKnown } from "../controllers/thingsAlreadyKnownControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThingsAlreadyKnown);
