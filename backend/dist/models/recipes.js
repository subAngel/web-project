"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recipesSchema = new mongoose_1.Schema({
    recipe_name: {
        type: String,
        required: true,
    },
    description: String,
    user: {
        type: String,
        required: true,
    },
    fullname_user: String,
    servings: {
        type: Number,
        required: true,
    },
    cooking_time: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    steps: {
        type: String,
        required: true,
    },
    filename: String,
    path: String,
    created_ad: { type: Date, default: Date.now() },
    mimetype: String,
    originalname: String,
});
exports.default = (0, mongoose_1.model)("recipes", recipesSchema);
