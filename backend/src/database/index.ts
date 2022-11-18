import * as mongo from "./mongo";
import * as sql from "./sql";

// Choose what database to use, currently support Mongo
// TODO: support sql in the future
export * from "./mongo";

// // Choose what database to use, currently support Mongo
// // TODO: support sql in the future
// if (true) {
// 	const connection = require("./mongo/connection/connection");
// 	const mongo = require("./mongo/mongo");

// 	module.exports = {
// 		connectDb: connection.connectDb,

// 		// User api
// 		findUser: mongo.findUser,
// 		addUser: mongo.addUser,

// 		// Event api
// 		addEvent: mongo.addEvent,
// 	};
// } else {
// 	const sql = require("./sql/sql");

// 	module.exports = {
// 		connectDb: sql.connectDb,

// 		// User api
// 		findUser: sql.findUser,
// 		addUser: sql.addUser,

// 		// Event api
// 		addEvent: sql.addEvent,
// 	};
// }
