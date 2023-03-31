import express, { Express, Request, Response } from "express";
import cors from "cors";
import asyncErrors from "express-async-errors";
import { tasksRouter } from "../routes/tasks";
import { projectsRouter } from "../routes/projects";
import { logger } from "../middleware/logging";

export const app: Express = express();

app.use(cors()); // Enable CORS
app.use(asyncErrors()); // Enable async error handling
app.use(express.json()); // Parse JSON bodies
app.use(logger); // Log all requests

app.get("/", (_req: Request, res: Response) => {
	res.send("Please use the correct endpoint to access data");
});

// Health check endpoint for Render
app.get("/healthz", (_req: Request, res: Response) => {
	res.send("OK");
});

app.use("/tasks", tasksRouter);
app.use("/projects", projectsRouter);
