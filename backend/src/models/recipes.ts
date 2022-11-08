import { model, Schema, Document } from "mongoose";
import user from "./user";
import User from "./user";

export interface IRecipe extends Document {
	recipe_name: string;
	description: string;
	user: string;
	fullname_user: string;
	photo: string;
	origin: string;
	servings: number;
	cooking_time: number;
	ingredients: Array<Object>;
	steps: Array<Object>;
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
	photo: {
		filename: { type: String },
		path: { type: String },
		originalname: { type: String },
		mumetype: String,
		size: { type: Number },
	},
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

export default model<IRecipe>("recipes", recipesSchema);
