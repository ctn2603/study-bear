"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventModel = void 0;
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
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
const eventModel = (0, mongoose_1.model)("events", eventSchema);
exports.eventModel = eventModel;
//# sourceMappingURL=eventModel.js.map