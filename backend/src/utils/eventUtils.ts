import * as dbManager from "../database";
import { IEvent } from "../database";

function addEvent(event: IEvent) {
	return dbManager.addEvent(event);
}

export { addEvent };
