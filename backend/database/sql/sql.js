module.exports = {
	connectDb: async () => {},

	// User api
	findUser: () => ({}),
	addUser: (username, email, password) => ({ username, email, password }),

	// Event api
	addEvent: (event) => event,
};
