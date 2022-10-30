import { model, Schema, Document } from "mongoose";
import recipeSchema, { IRecipe } from "./recipes";
import bcrypt from "bcrypt";
import passport from "passport";

export interface IUser extends Document {
	username: string;
	email: string;
	full_name: string;
	city: string;
	password: string;
	comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema({
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
	city: String,
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre<IUser>("save", async function (next) {
	const user = this;
	if (!user.isModified("password")) return next();

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(user.password, salt);
	user.password = hash;
	next();
});

userSchema.methods.comparePassword = async function (
	password: string
): Promise<boolean> {
	return await bcrypt.compare(password, this.password);
};

export default model<IUser>("user", userSchema);
