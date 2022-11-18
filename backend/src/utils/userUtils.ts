import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import * as db from "../database";
import { IUser } from "../database";

function generateToken(email: string, password: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const token = jwt.sign({ email, password }, "secret", {
			expiresIn: 30 * 60, // expire in 30 minutes
		});
		resolve(token);
	});
}

function addUser(user: IUser) {
	return db
		.findUser(user.email)
		.then((user: any) => {
			if (user) return Promise.reject("Account Existed"); // Not exist
			return bcryptjs.genSalt(10);
		})
		.then((salt: string) => bcryptjs.hash(user.password, salt))
		.then((hashedPassword: string) =>
			db.addUser({
				username: user.username,
				email: user.email,
				password: hashedPassword,
			})
		);
}

function isValidUser(email: string, password: string) {
	return db.findUser(email).then((user: any) => {
		if (user) return bcryptjs.compare(password, user.password);
		return Promise.reject("Invalid Account");
	});
}

export { addUser, isValidUser, generateToken };
