const express = require("express");
const eventUtils = require("../utils/eventUtils");

const dataRouter = express.Router();

dataRouter.post("/add-event", (req, res) => {
    const {
        pinLocation,
        title,
        description,
        capacity,
        datetime,
        subject,
        major,
        isFull,
        author
    } = req.body;

	return eventUtils
		.addEvent(req.body)
		.then(() => res.sendStatus(200))
		.catch((error) => {
			res.status(500).send(error);
		});
});

dataRouter.delete("/remove-event", (req, res) => {
	// TODO: remove event
	res.send("Remove event");
});

dataRouter.get("/get-events", (req, res) => {
	// TODO: get events
	res.send("Get events");
});

module.exports = dataRouter;
