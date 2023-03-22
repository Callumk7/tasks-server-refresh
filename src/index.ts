import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config();
const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
	res.send("Express server running Typescript");
});

app.get("/tasks", async (req: Request, res: Response) => {
	const allTasks = await prisma.task.findMany();
	res.json(allTasks);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
