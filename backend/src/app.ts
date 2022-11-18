import express from "express";
import cors from "cors";
import { tokenValidator } from "./middleware";
import { authRouter, dataRouter } from "./routers";
import * as db from "./database";

// Connect to database server (cloud)
db.connectDb();

// Initialize api servers
const server = express();
const PORT = process.env.PORT || 3000;

// Setup middleware
server.use(cors());
server.use(express.json());
server.use("/api", tokenValidator);

// Setup routers
server.use(authRouter);
server.use("/api", dataRouter);

server.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`);
});
