import { type Request, type Response } from "express";
import thingsAlreadyKnown from "../data/thingsAlreadyKnown.js";
import { debug } from "../index.js";

export const getThingsAlreadyKnown = (req: Request, res: Response) => {
  debug("Sent response with thingsAlreadyKnown list");
  res.status(200).json({ thingsAlreadyKnown });
};
