const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
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
	}
});

module.exports = new mongoose.model("events", eventSchema);
