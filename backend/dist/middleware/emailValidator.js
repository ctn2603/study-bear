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
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidator = void 0;
function emailValidator(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if ("email" in req.body) {
            const email = req.body.email;
            const isValidFormat = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email.toLowerCase());
            if (isValidFormat)
                next();
            else
                res.status(401).send("invalid email format");
        }
        else {
            res.status(401).send("email is missing");
        }
    });
}
exports.emailValidator = emailValidator;
//# sourceMappingURL=emailValidator.js.map