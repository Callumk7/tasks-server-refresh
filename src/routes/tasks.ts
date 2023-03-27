import { Router } from "express";
import {
	createTask,
	getAllTasks,
	getTaskById,
	updateTask,
} from "../controllers/tasks";

export const tasksRouter = Router();

// GET /tasks
tasksRouter.get("/", getAllTasks);

// GET /tasks/:id
tasksRouter.get("/:id", getTaskById);

// POST /tasks
tasksRouter.post("/", createTask);

// PUT /tasks/:id
tasksRouter.put("/:id", updateTask);
