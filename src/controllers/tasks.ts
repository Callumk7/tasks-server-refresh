import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { Task } from "@prisma/client";
import prisma from "../client";

// get all tasks
export const getAllTasks = async (
	_req: Request,
	res: Response<Task[]>,
	next: NextFunction
) => {
	try {
		const tasks = await prisma.task.findMany({
			where: {
				deleted: false,
				archived: false,
			},
		});
		res.json(tasks);
        next();
	} catch (error) {
		next(error);
	}
};

// get a task by id
export const getTaskById = async (
	req: Request<{ id: string }>,
	res: Response<Task>,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const task = await prisma.task.findUnique({
			where: {
				id: Number(id),
			},
		});
		if (!task) {
			throw createError(404, `Task with id ${id} not found`);
		}
		res.json(task);
	} catch (error) {
		next(error);
	}
};
// create a task
export const createTask = async (
	req: Request<null, null, { title: string; body: string }>,
	res: Response<Task>,
	next: NextFunction
) => {
	try {
		const { title, body } = req.body;
		if (!title) {
			throw new Error("Title is required");
		}
		const newTask = await prisma.task.create({
			data: {
				title,
				body,
			},
		});
		res.json(newTask);
        next();
	} catch (error) {
		next(error);
	}
};

// update a task
export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
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
        next();
    } catch (error) {
        next(error);
    }
};

