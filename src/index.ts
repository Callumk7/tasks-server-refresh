import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { tasksRouter } from "./routes/tasks";
import { projectsRouter } from "./routes/projects";

config(); // Load environment variables
const app: Express = express();
const port = process.env.PORT || 8080;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

app.get("/", (req: Request, res: Response) => {
	res.send("Please use the correct endpoint to access data");
});

app.use("/tasks", tasksRouter);
app.use("/projects", projectsRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// todo
// 1. projects
// 2. add users
// 3. add auth
// 4. add time stamps to all events
// 5. add logging
// 6. add tests
// 7. add data models
