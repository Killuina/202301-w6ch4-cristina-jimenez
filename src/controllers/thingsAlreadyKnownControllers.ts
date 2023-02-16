import { type Request, type Response } from "express";
import thingsAlreadyKnown from "../data/thingsAlreadyKnown.js";

export const getThingsAlreadyKnown = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlreadyKnown });
};
