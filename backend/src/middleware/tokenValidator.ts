import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

async function tokenValidator(req: Request, res: Response, next: NextFunction) {
	if ("token" in req.headers) {
		const token: string = req.headers.token as string;

		try {
			await jwt.verify(token, "secret");
			next();
		} catch (error: any) {
			res.sendStatus(401);
		}
	} else res.sendStatus(401);
}

export { tokenValidator };
