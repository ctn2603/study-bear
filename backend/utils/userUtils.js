const bcrypt = require("bcrypt");
const dbManager = require("../database/dbmanager");
const jwt = require("jsonwebtoken");

function generateToken(email, password) {
	return new Promise((resolve, reject) => {
		const token = jwt.sign({ email, password }, "secret", {
			expiresIn: 30 * 60, // expire in 30 minutes
		});
		resolve(token);
	});
}

function addUser(username, email, password) {
	return dbManager
		.findUser(email)
		.then((user) => {
			if (user) return Promise.reject("Account Existed"); // Not exist
			return bcrypt.genSalt(10);
		})
		.then((salt) => bcrypt.hash(password, salt))
		.then((hashedPassword) =>
			dbManager.addUser(username, email, hashedPassword)
		);
}

function isValidUser(email, password) {
	return dbManager.findUser(email).then((user) => {
		if (user) return bcrypt.compare(password, user.password);
		return Promise.reject("Invalid Account");
	});
}

module.exports = {
	addUser,
	isValidUser,
	generateToken,
};
