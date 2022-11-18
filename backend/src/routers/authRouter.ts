import express from "express";
import { Request, Response } from "express";
import * as utils from "../utils";
import { emailValidator, passwordValidator } from "../middleware";

const authRouter = express.Router();

authRouter.post(
	"/signup",
	[emailValidator, passwordValidator],
	(req: Request, res: Response) => {
		const { username, email, password } = req.body;

		return utils
			.addUser({ username, email, password })
			.then(() => utils.generateToken(email, password))
			.then((token: string) => res.json({ token }))
			.catch((error) => res.status(500).send(error));
	}
);

authRouter.post(
	"/signin",
	[emailValidator],
	async (req: Request, res: Response) => {
		const password = req.body.password;
		const email = req.body.email;

		// Check if user exists in database
		return utils
			.isValidUser(email, password)
			.then((isValid: boolean) => {
				if (isValid) return utils.generateToken(email, password);
				else return Promise.reject("Invalid Account");
			})
			.then((token: string) => res.json({ token }))
			.catch((error) => {
				res.status(500).send(error);
			});
	}
);

authRouter.post("/signout", (req, res) => {
	res.send(`abcddef ${process.env.NODE_ENV}`);
});

export { authRouter };
