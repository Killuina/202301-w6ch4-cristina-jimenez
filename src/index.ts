import "./loadEnviroment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import thingsAlreadyKnown from "./data/thingsAlreadyKnown.js";
import { thingsRouter } from "./router/thingsRouter.js";

const app = express();

export const debug = createDebug("things:root");

app.use(morgan("dev"));

const port = process.env.PORT ?? 4321;

app.get("/things", thingsRouter);

app.listen(port);
