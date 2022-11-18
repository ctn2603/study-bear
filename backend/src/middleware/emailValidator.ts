import { Request, Response, NextFunction } from "express";

async function emailValidator(req: Request, res: Response, next: NextFunction) {
	if ("email" in req.body) {
		const email: string = req.body.email;
		const isValidFormat: boolean = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(
			email.toLowerCase()
		);

		if (isValidFormat) next();
		else res.status(401).send("invalid email format");
	} else {
		res.status(401).send("email is missing");
	}
}

export { emailValidator };
