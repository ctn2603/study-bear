import { IEvent, eventModel } from "../model";

function addEvent(event: IEvent) {
	return eventModel.create(event);
}

export { IEvent, addEvent };
