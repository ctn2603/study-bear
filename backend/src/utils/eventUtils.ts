import * as dbManager from "../database";
import { IEvent } from "../database";

function addEvent(event: IEvent) {
	return dbManager.addEvent(event);
}

function removeEvent(event: IEvent) {
	return dbManager.removeEvent(event);
}

export { addEvent, removeEvent };
