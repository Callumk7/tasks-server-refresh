import { Router } from "express";
import {
	createTask,
	getAllTasks,
	getTaskById,
	updateTask,
} from "../controllers/tasks";

export const tasksRouter = Router();
tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.post("/", createTask);
tasksRouter.patch("/:id", updateTask);
