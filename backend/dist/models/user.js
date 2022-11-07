"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const md5_1 = __importDefault(require("md5"));
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    full_name: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
});
userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password"))
        return next();
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(user.password, salt);
    const hash = (0, md5_1.default)(user.password);
    user.password = hash;
    next();
});
userSchema.methods.comparePassword = function (password) {
    return (0, md5_1.default)(password) === this.password;
};
exports.default = (0, mongoose_1.model)("user", userSchema);
