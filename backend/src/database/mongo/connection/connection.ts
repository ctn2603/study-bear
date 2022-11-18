import mongoose from "mongoose";

const adminUsername = "fullstack-group-18";
const adminPassword = "fullstack-final-project";

let dbName;
if (process.env.NODE_ENV === "production") dbName = "fullstackdb";
else dbName = "fullstackdbdev";

const dbUrl = `mongodb+srv://${adminUsername}:${adminPassword}@cluster0.rwglkg0.mongodb.net/${dbName}?retryWrites=true&w=majority`;
async function connectDb() {
	try {
		await mongoose.connect(dbUrl, {
			connectTimeoutMS: 2000, // Throw exception if can't connect to database within 2 minutes
		});
	} catch (error) {
		console.log(error);
	}
}

export { connectDb };
