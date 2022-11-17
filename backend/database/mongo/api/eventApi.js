const eventModel = require("../model/eventModel");

function addEvent(event) {
	return eventModel.create(event);
}

module.exports = {
	addEvent
};