const userModel = require("../model/userModel");

function findUser(email) {
	return userModel.findOne({ email }).exec();
}

function addUser(username, email, password) {
	return userModel.create({ username, email, password }).catch((error) => {
		if (error.name == "ValidationError") {
			throw Object.values(error.errors)[0].message;
		}
		else throw error;
	});
}

module.exports = {
	findUser,
	addUser,
};
