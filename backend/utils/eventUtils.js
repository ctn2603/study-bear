const dbManager = require("../database/dbmanager");

function addEvent(event) {
	return dbManager.addEvent(event);
}

module.exports = {
	addEvent,
};
