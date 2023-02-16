import { type Request, type Response } from "express";
import thingsAlreadyKnown from "../data/thingsAlreadyKnown.js";
import { debug } from "../index.js";

export const getThingsAlreadyKnown = (req: Request, res: Response) => {
  debug("Sent response with thingsAlreadyKnown list");
  res.status(200).json({ thingsAlreadyKnown });
};

export const getThingAlreadyKnown = (req: Request, res: Response) => {
  debug("Sent response with thingAlreadyKnown data");
  const { thingId } = req.params;

  const thingAlreadyKnown = thingsAlreadyKnown.find(
    (thingAlreadyKnown) => thingAlreadyKnown.id === +thingId
  );

  if (!thingAlreadyKnown) {
    res.status(404).json({ error: "Thing not found :(" });
    return;
  }

  res.status(200).json({ thingAlreadyKnown });
};
