"use strict";
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
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const adminUsername = "fullstack-group-18";
const adminPassword = "fullstack-final-project";
let dbName;
if (process.env.NODE_ENV === "production")
    dbName = "fullstackdb";
else
    dbName = "fullstackdbdev";
// const dbUrl = `mongodb+srv://${adminUsername}:${adminPassword}@cluster0.rwglkg0.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const dbUrl = `mongodb+srv://${adminUsername}:${adminPassword}@cluster0.xyq0dsw.mongodb.net/${dbName}?retryWrites=true&w=majority`;
function connectDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(dbUrl, {
                connectTimeoutMS: 2000, // Throw exception if can't connect to database within 2 minutes
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.connectDb = connectDb;
//# sourceMappingURL=connection.js.map