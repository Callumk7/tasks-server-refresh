import { Router } from "express";
import {
	createTask,
	getAllTasks,
	getTaskById,
	updateTask,
} from "./tasks.controllers";

export const tasksRouter = Router();

// GET /api/tasks
tasksRouter.get("/", getAllTasks);

// GET /api/tasks/:id
tasksRouter.get("/:id", getTaskById);

// POST /api/tasks
tasksRouter.post("/", createTask);

// PUT /api/tasks/:id
tasksRouter.put("/:id", updateTask);
