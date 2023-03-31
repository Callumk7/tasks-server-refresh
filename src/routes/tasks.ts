import { Router } from "express";
import { createTask, getAllTasks, updateTask } from "../controllers/tasks";

export const tasksRouter = Router();
tasksRouter.get("/", getAllTasks);
tasksRouter.post("/", createTask);
tasksRouter.patch("/:id", updateTask);
