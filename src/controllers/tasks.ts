import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { Task } from "@prisma/client";
import prisma from "../client";

export const getAllTasks = async (_req: Request, res: Response<Task[]>, next: NextFunction) => {
	try {
		const tasks = await prisma.task.findMany({
			where: {
				deleted: false,
				archived: false,
			},
		});
		res.json(tasks);
		res.status(200);
		res.statusMessage = "Tasks retrieved successfully";
		next();
	} catch (error) {
		next(error);
	}
};

export const createTask = async (
	req: Request<null, null, { title: string; body: string }>,
	res: Response<Task>,
	next: NextFunction
) => {
	try {
		const { title, body } = req.body;
		if (!title) {
			throw createError(400, "Title is required");
		}
		const newTask = await prisma.task.create({
			data: {
				title,
				body,
			},
		});
		res.json(newTask);
		res.status(201);
		res.statusMessage = "Task created successfully";
		next();
	} catch (error) {
		next(error);
	}
};

export const updateTask = async (
	req: Request<{ id: number }>,
	res: Response<Task>,
	next: NextFunction
) => {
	try {
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
		res.status(200);
		res.statusMessage = "Task updated successfully";
		next();
	} catch (error) {
		next(error);
	}
};
