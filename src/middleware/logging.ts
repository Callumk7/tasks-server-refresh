import { Request, Response, NextFunction } from "express";
import prisma from "../client";

export const logger = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	next();
	const { method, path } = req;
	const event = await prisma.event.create({
		data: {
			type: method,
			route: path,
		},
	});
	console.log(event);
};
