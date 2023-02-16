import "./loadEnviroment.js";
import express from "express";
import { Router } from "express";

const app = express();

const port = process.env.PORT ?? 4321;

const thingsAlreadyKnownRouter = Router();

app.use("/things", thingsAlreadyKnownRouter);

app.listen(port);
