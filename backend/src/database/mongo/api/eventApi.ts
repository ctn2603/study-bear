import { IEvent, eventModel } from "../model";

function addEvent(event: IEvent) {
	return eventModel.create(event);
}

function removeEvent(event: IEvent) {
	return eventModel.findByIdAndDelete(event);
}

function getEvents() {
	return eventModel.find();
}

function deleteAllEvents() {
	return eventModel.deleteMany();
}

export { IEvent, addEvent, removeEvent, getEvents, deleteAllEvents };
