import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
import prisma from "./client";

config();
const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
	res.send("Express server running Typescript");
});

app.get("/tasks", async (req: Request, res: Response) => {
	const allTasks = await prisma.task.findMany();
	res.json(allTasks);
});

app.get("/tasks/:id", async (req: Request, res: Response) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).json({ error: "id is required" });
		return;
	}
	if (isNaN(Number(id))) {
		res.status(400).json({ error: "id must be a number" });
		return;
	}
	const task = await prisma.task.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (!task) {
		res.status(404).json({ error: "task not found" });
		return;
	}
	res.json(task);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
