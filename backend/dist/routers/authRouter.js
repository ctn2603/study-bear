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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const utils = __importStar(require("../utils"));
const middleware_1 = require("../middleware");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.post("/signup", [middleware_1.emailValidator, middleware_1.passwordValidator], (req, res) => {
    const { username, email, password } = req.body;
    return utils
        .addUser({ username, email, password })
        .then(() => utils.generateToken(email, password))
        .then((token) => res.json({ token }))
        .catch((error) => res.status(500).send(error));
});
authRouter.post("/signin", [middleware_1.emailValidator], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const password = req.body.password;
    const email = req.body.email;
    // Check if user exists in database
    return utils
        .isValidUser(email, password)
        .then((isValid) => {
        if (isValid)
            return utils.generateToken(email, password);
        else
            return Promise.reject("Invalid Account");
    })
        .then((token) => res.json({ token }))
        .catch((error) => {
        res.status(500).send(error);
    });
}));
authRouter.post("/signout", (req, res) => {
    res.send(`abcddef ${process.env.NODE_ENV}`);
});
//# sourceMappingURL=authRouter.js.map