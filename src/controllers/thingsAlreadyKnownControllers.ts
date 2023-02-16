import { type Request, type Response } from "express";
import thingsAlreadyKnown from "../data/thingsAlreadyKnown.js";
import { debug } from "../index.js";

export const getThingsAlreadyKnown = (req: Request, res: Response) => {
  debug("Sent response with thingsAlreadyKnown list");
  res.status(200).json({ thingsAlreadyKnown });
};

export const getThingAlreadyKnown = (req: Request, res: Response) => {
  debug("Sent response with thingAlreadyKnown data");
  const { idThing } = req.params;

  const thingAlreadyKnown = thingsAlreadyKnown.find(
    ({ id }) => id === +idThing
  );

  if (!thingAlreadyKnown) {
    debug("Sent error response");
    res.status(404).json({ error: "I know everything but that..." });
    return;
  }

  debug("Sent response with thing data");
  res.status(200).json({ thingAlreadyKnown });
};
