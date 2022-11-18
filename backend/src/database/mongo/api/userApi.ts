import { IUser, userModel } from "../model";

function findUser(email: string) {
	return userModel.findOne({ email }).exec();
}

function addUser(user: IUser) {
	return (
		userModel
			// .create({ user.username, user.email, user.password })
			.create(user)
			.catch((error: any) => {
				if (error.name == "ValidationError") {
					// throw Object.values(error.errors)[0].message;
					throw (Object.values(error.errors)[0] as any).message;
				} else throw error;
			})
	);
}

export { IUser, findUser, addUser };
