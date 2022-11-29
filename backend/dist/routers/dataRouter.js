"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRouter = void 0;
const express_1 = __importDefault(require("express"));
const utils = __importStar(require("../utils"));
const dataRouter = express_1.default.Router();
exports.dataRouter = dataRouter;
dataRouter.post("/add-event", (req, res) => {
    const { pinLocation, title, description, capacity, datetime, subject, major, isFull, author, } = req.body;
    return utils
        .addEvent(req.body)
        .then(() => res.sendStatus(200))
        .catch((error) => {
        res.status(500).send(error);
    });
});
dataRouter.delete("/remove-event", (req, res) => {
    // TODO: remove event
    res.send("Remove event");
});
dataRouter.get("/get-events", (req, res) => {
    // TODO: get events
    res.send("Get events");
});
//# sourceMappingURL=dataRouter.js.map