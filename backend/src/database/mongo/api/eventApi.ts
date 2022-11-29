import { IEvent, eventModel } from "../model";

function addEvent(event: IEvent) {
	return eventModel.create(event);
}

function removeEvent(event: IEvent) {
	return eventModel.findByIdAndDelete(event);
}

export { IEvent, addEvent, removeEvent };
