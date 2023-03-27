import { Request, Response } from "express";
import prisma from "../client";

// get all projects
export const getAllProjects = async (req: Request, res: Response) => {
	const projects = await prisma.project.findMany({
		include: {
			tasks: true,
		},
	});
	res.json(projects);
};

// get a project by id
export const getProjectById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const project = await prisma.project.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			tasks: true,
		},
	});
	res.json(project);
};

// create a project
export const createProject = async (req: Request, res: Response) => {
	const { title, body, completed } = req.body;
	const project = await prisma.project.create({
		data: {
			title,
			body,
			completed,
		},
	});
	res.json(project);
};

// update a project
export const updateProject = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, body, completed, archived, deleted } = req.body;
	const updatedProject = await prisma.project.update({
		where: {
			id: Number(id),
		},
		data: {
			title,
			body,
			completed,
			archived,
			deleted,
		},
	});
	res.json(updatedProject);
};
