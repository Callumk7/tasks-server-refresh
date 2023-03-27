import { Request, Response, NextFunction } from "express";
import prisma from "../client";

export const logger = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { method, originalUrl, body } = req;
	const data = JSON.stringify(body);
	const event = await prisma.event.create({
		data: {
			type: method,
			route: originalUrl,
			data: data,
		},
	});
	console.log(event);
	next();
};
