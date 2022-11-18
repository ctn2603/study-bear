import { Request, Response, NextFunction } from "express";

async function passwordValidator(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if ("password" in req.body) {
		const password = req.body.password;
		if (password.length >= 6) next();
		else res.status(401).send("invalid password format");
	} else {
		res.status(401).send("password is missing");
	}
}

export { passwordValidator };
