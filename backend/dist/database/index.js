"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Choose what database to use, currently support Mongo
// TODO: support sql in the future
__exportStar(require("./mongo"), exports);
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
//# sourceMappingURL=index.js.map