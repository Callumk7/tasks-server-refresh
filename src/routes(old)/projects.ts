import express, { Router } from "express";
import prisma from "../client";

export const projectsRouter = express.Router();

projectsRouter.get("/", async (req, res) => {
	const allProjects = await prisma.project.findMany({});
	res.json(allProjects);
});

projectsRouter.get("/:id", async (req, res) => {
	const project = await prisma.project.findUnique({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(project);
});

projectsRouter.post("/", async (req, res) => {
	const project = await prisma.project.create({
		data: {
			title: req.body.title,
			body: req.body.body,
			completed: req.body.completed,
		},
	});
	res.json(project);
});

projectsRouter.put("/:id", async (req, res) => {
	const project = await prisma.project.update({
		where: {
			id: Number(req.params.id),
		},
		data: {
			title: req.body.title,
			body: req.body.body,
			completed: req.body.completed,
			archived: req.body.archived,
			deleted: req.body.deleted,
		},
	});
	res.json(project);
});
