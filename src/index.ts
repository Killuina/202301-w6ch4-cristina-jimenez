import "./loadEnviroment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import { thingsRouter } from "./router/thingsRouter.js";

const port = process.env.PORT ?? 4321;

const app = express();

app.use(express.json());

export const debug = createDebug("things:root");

app.use(morgan("dev"));

app.use("/", thingsRouter);

app.listen(port);
