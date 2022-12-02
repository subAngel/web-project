import { model, Schema, Document } from "mongoose";
import user from "./user";
import User from "./user";

export interface IRecipe extends Document {
	recipe_name: string;
	description: string;
	user: string;
	fullname_user: string;
	servings: number;
	cooking_time: number;
	ingredients: Array<String>;
	steps: Array<String>;
	filename: String;
	path: String;
	created_at: Date;
	mimetype: String;
	originalname: String;
}

const recipesSchema = new Schema({
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
		type: Array,
		required: true,
	},
	steps: {
		type: Array,
		required: true,
	},
	filename: String,
	path: String,
	created_ad: { type: Date, default: Date.now() },
	mimetype: String,
	originalname: String,
});

export default model<IRecipe>("recipes", recipesSchema);
