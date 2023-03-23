import { Router } from "express";
import {
	createProject,
	getProjectById,
	getAllProjects,
	updateProject,
} from "./projects.controllers";

export const projectsRouter = Router();

// GET /projects
projectsRouter.get("/", getAllProjects);

// GET /projects/:id
projectsRouter.get("/:id", getProjectById);

// POST /projects
projectsRouter.post("/", createProject);

// PUT /projects/:id
projectsRouter.put("/:id", updateProject);
