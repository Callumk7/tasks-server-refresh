import express, { Express, Request, Response } from "express";
import cors from "cors";
import { tasksRouter } from "../routes/tasks";
import { projectsRouter } from "../routes/projects";
import { logger } from "../middleware/logging";

export const app: Express = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.get("/", (req: Request, res: Response) => {
	res.send("Please use the correct endpoint to access data");
});

app.use(logger); // Log all requests
app.use("/tasks", tasksRouter);
app.use("/projects", projectsRouter);
