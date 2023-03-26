import { Request, Response } from "express";
import prisma from "../client";

// get all tasks
export const getAllTasks = async (req: Request, res: Response) => {
	const tasks = await prisma.task.findMany({
		where: {
			deleted: false,
			archived: false,
		},
	});
	res.json(tasks);
};

// get a task by id
export const getTaskById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const task = await prisma.task.findUnique({
		where: {
			id: Number(id),
		},
	});
	res.json(task);
};

// create a task
export const createTask = async (req: Request, res: Response) => {
	const { title, body, completed } = req.body;
	const newTask = await prisma.task.create({
		data: {
			title,
			body,
			completed,
		},
	});
	res.json(newTask);
};

// update a task
export const updateTask = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, body, completed, archived, deleted } = req.body;
	const updatedTask = await prisma.task.update({
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
	res.json(updatedTask);
};

// Mark a task as deleted
export const markTaskAsDeleted = async (req: Request, res: Response) => {
	const { id } = req.params;
	const deletedTask = await prisma.task.update({
		where: {
			id: Number(id),
		},
		data: {
			deleted: true,
		},
	});
	res.json(deletedTask);
};
