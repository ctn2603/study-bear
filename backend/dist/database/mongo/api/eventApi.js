"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEvent = void 0;
const model_1 = require("../model");
function addEvent(event) {
    return model_1.eventModel.create(event);
}
exports.addEvent = addEvent;
//# sourceMappingURL=eventApi.js.map