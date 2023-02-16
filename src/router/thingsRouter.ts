import { Router } from "express";
import {
  getThingAlreadyKnown,
  getThingsAlreadyKnown,
} from "../controllers/thingsAlreadyKnownControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThingsAlreadyKnown);
thingsRouter.get("/things/:idThing", getThingAlreadyKnown);
