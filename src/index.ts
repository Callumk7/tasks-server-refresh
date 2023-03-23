import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import { tasksRouter } from "./routes/tasks";

config();
const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
	res.send("Please use the correct endpoint to access data");
});

app.use(tasksRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
