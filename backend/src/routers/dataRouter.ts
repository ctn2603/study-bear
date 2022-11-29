import express from "express";
import * as utils from "../utils";

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
		author,
	} = req.body;

	return utils
		.addEvent(req.body)
		.then(() => res.sendStatus(200))
		.catch((error: any) => {
			res.status(500).send(error);
		});
});

dataRouter.delete("/remove-event", (req, res) => {
	// TODO: remove event
	return utils
		.removeEvent(req.body)
		.then(() => res.sendStatus(200))
		.catch((error: any) => {
			res.status(500).send(error);
		});
});

dataRouter.get("/get-events", (req, res) => {
	// TODO: get events
	res.send("Get events");
});

export { dataRouter };
