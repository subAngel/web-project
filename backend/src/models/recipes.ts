import { model, Schema, Document } from "mongoose";

export interface IRecipe extends Document {
	recipe_name: string;
	description: string;
	user: string;
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

export default model<IRecipe>("recipes", recipesSchema);
