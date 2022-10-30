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
    photo: { type: Buffer },
    origin: String,
    servings: {
        type: Number,
        required: true,
    },
    cooking_time: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    steps: {
        type: Array,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("recipes", recipesSchema);
