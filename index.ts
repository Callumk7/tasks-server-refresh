import express, { Express, Request, Response } from "express";
import { config } from "dotenv";

config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Express server running Typescript");
});

app.listen(port, () => {
  console.log(
    `I just changed this message, and the server is still running on port ${port}`
  );
});
