const connection = require("./connection/connection");
const userApi = require("./api/userApi");
const eventApi = require("./api/eventApi");

module.exports = {
	connectDb: connection.connectDb,

	// User api
	findUser: userApi.findUser,
	addUser: userApi.addUser,

	// Event api
	addEvent: eventApi.addEvent,
};
