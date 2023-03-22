import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import { tasksRouter } from './routes/tasks';
config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.path}`);
	next();
});

app.get('/', (req: Request, res: Response) => {
	res.send('Please use /tasks or /projects to access the API.');
});

app.use('/tasks', tasksRouter);

app.listen(port, () => {
	console.log(`App listening on ${port} in ${process.env.NODE_ENV} mode.`);
});
