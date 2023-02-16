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

export const deleteThingAlreadyKnown = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const deletedThingAlreadyKnown = thingsAlreadyKnown.find(
    ({ id }) => id === +idThing
  );

  if (!deletedThingAlreadyKnown) {
    debug("Sent error response");
    res
      .status(404)
      .json({ error: "You can't delete something that doesn't exist :(" });
    return;
  }

  const newThingsAlreadyKnown = thingsAlreadyKnown.splice(
    deletedThingAlreadyKnown.id - 1,
    1
  );

  res.json({ newThingsAlreadyKnown });
};
