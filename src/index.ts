import "./loadEnviroment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import { thingsRouter } from "./router/thingsRouter.js";
import chalk from "chalk";

const port = process.env.PORT ?? 4321;

const app = express();

app.use(express.json());

export const debug = createDebug("things:root");

app.use(morgan("dev"));

app.use("/", thingsRouter);

app.listen(port, () => {
  debug(chalk.greenBright(`Server deployed on port ${port}`));
});

app.use("/*", (req, res) => {
  res
    .status(404)
    .json({ error: "Invalid endpoint, read documentation next time" });
});
