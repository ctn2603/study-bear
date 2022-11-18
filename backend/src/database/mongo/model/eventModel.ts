import { Schema, model } from "mongoose";

interface IEvent {
	pinLocation: string;
	title: string;
	description: string;
	capacity: number;
	datetime: Date;
	subject: string;
	major: string;
	isFull: boolean;
	author: string;
}

const eventSchema = new Schema<IEvent>({
	pinLocation: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	capacity: {
		type: Number,
		required: true,
	},
	datetime: {
		type: Date,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	major: {
		type: String,
		required: true,
	},
	isFull: {
		type: Boolean,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
});

const eventModel = model("events", eventSchema);
export { IEvent, eventModel };
