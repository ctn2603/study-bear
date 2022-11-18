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
exports.generateToken = exports.isValidUser = exports.addUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db = __importStar(require("../database"));
function generateToken(email, password) {
    return new Promise((resolve, reject) => {
        const token = jsonwebtoken_1.default.sign({ email, password }, "secret", {
            expiresIn: 30 * 60, // expire in 30 minutes
        });
        resolve(token);
    });
}
exports.generateToken = generateToken;
function addUser(user) {
    return db
        .findUser(user.email)
        .then((user) => {
        if (user)
            return Promise.reject("Account Existed"); // Not exist
        return bcryptjs_1.default.genSalt(10);
    })
        .then((salt) => bcryptjs_1.default.hash(user.password, salt))
        .then((hashedPassword) => db.addUser({
        username: user.username,
        email: user.email,
        password: hashedPassword,
    }));
}
exports.addUser = addUser;
function isValidUser(email, password) {
    return db.findUser(email).then((user) => {
        if (user)
            return bcryptjs_1.default.compare(password, user.password);
        return Promise.reject("Invalid Account");
    });
}
exports.isValidUser = isValidUser;
//# sourceMappingURL=userUtils.js.map