"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.findUser = void 0;
const model_1 = require("../model");
function findUser(email) {
    return model_1.userModel.findOne({ email }).exec();
}
exports.findUser = findUser;
function addUser(user) {
    return (model_1.userModel
        // .create({ user.username, user.email, user.password })
        .create(user)
        .catch((error) => {
        if (error.name == "ValidationError") {
            // throw Object.values(error.errors)[0].message;
            throw Object.values(error.errors)[0].message;
        }
        else
            throw error;
    }));
}
exports.addUser = addUser;
//# sourceMappingURL=userApi.js.map