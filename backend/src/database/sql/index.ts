export default {
	connectDb: async () => {},

	// User api
	findUser: () => ({}),
	addUser: (username:any, email:any, password:any) => ({ username, email, password }),

	// Event api
	addEvent: (event:any) => event,
};
