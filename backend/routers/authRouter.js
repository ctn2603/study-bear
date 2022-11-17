const express = require("express");
const userUtils = require("../utils/userUtils");
const emailValidator = require("../middleware/emailValidator");
const passwordValidator = require("../middleware/passwordValidator");

const authRouter = express.Router();

authRouter.post("/signup", [emailValidator, passwordValidator], (req, res) => {
	const { username, email, password } = req.body;

	return userUtils
		.addUser(username, email, password)
		.then(() => userUtils.generateToken(email, password))
		.then((token) => res.json({ token }))
		.catch((error) => {
			res.status(500).send(error);
		});
});

authRouter.post("/signin", [emailValidator], async (req, res) => {
	const password = req.body.password;
	const email = req.body.email;

	// Check if user exists in database
	return userUtils
		.isValidUser(email, password)
		.then((isValid) => {
			if (isValid) return userUtils.generateToken(email, password);
			else Promise.reject("Invalid Account");
		})
		.then((token) => res.json({ token }))
		.catch((error) => {
			res.status(500).send(error);
		});
});

module.exports = authRouter;
