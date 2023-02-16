import "./loadEnviroment.js";
import express from "express";
import { Router } from "express";
import morgan from "morgan";
import debug from "debug";
import thingsAlreadyKnown from "./data/thingsAlreadyKnown.js";

const app = express();

const port = process.env.PORT ?? 4321;

const thingsAlreadyKnownRouter = Router();

app.use("/things", thingsAlreadyKnownRouter);

app.listen(port);

app.get("/", (req, res) => {
  res.json(thingsAlreadyKnown);
});
