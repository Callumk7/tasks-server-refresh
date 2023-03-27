import { Router } from "express";

export const paramCheck = Router();

paramCheck.use((req, res, next) => {
	const id = req.params.id;
	if (id) {
		if (isNaN(Number(id))) {
			res.status(400).send("Invalid ID");
		} else {
			next();
		}
	} else {
		next();
	}
});
