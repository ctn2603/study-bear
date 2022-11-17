const express = require("express");
const cors = require("cors");
const tokenValidator = require("./middleware/tokenValidator");
const authRouter = require("./routers/authRouter");
const dataRouter = require("./routers/dataRouter");
const dbManager = require("./database/dbmanager");

// Connect to database server (cloud)
dbManager.connectDb();

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
