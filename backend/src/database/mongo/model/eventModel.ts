import { Schema, model } from "mongoose";

interface IEvent {
	title: string;
	description: string;
	location: string;
	time: string;
	currCap: number;
	capacity: number;
	id: number;
	lat: number;
	lng: number;
}

const eventSchema = new Schema<IEvent>({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	currCap: {
		type: Number,
		required: true,
	},
	capacity: {
		type: Number,
		required: true,
	},
	id: {
		type: Number,
		required: true,
	},
	lat: {
		type: Number,
		required: true,
	},
	lng: {
		type: Number,
		required: true,
	},
});

const eventModel = model("events", eventSchema);
export { IEvent, eventModel };
