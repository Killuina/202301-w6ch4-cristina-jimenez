import { Router } from "express";
import {
  deleteThingAlreadyKnown,
  getThingAlreadyKnown,
  getThingsAlreadyKnown,
} from "../controllers/thingsAlreadyKnownControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThingsAlreadyKnown);
thingsRouter.get("/things/:idThing", getThingAlreadyKnown);
thingsRouter.delete("/things/:idThing", deleteThingAlreadyKnown);
