import { Request, Response } from "express";
import Recipe, { IRecipe } from "../models/recipes";
import User, { IUser } from "../models/user";

const getFullName = async (user: String) => {
	const usuario = await User.findOne({ username: user });
	return usuario?.full_name;
};

export const getRecipes = async (req: Request, res: Response) => {
	const { user } = req.params;
	const tasks = await Recipe.find({ user: user });
	return res.status(200).json(tasks);
};
export const getRecipe = (req: Request, res: Response) => {
	return res.json({ msg: "get recipe" });
};
export const createRecipe = async (req: Request, res: Response) => {
	try {
		const filename = req.file?.filename;
		const path = "/img/uploads/" + req.file?.filename;
		const mimetype = req.file?.mimetype;
		const originalname = req.file?.originalname;
		const {
			recipe_name,
			description,
			fullname_user,
			servings,
			cooking_time,
			ingredients,
			steps,
		} = req.body;
		const { user } = req.params;

		const recipe = new Recipe({
			recipe_name,
			description,
			user,
			fullname_user,
			servings,
			cooking_time,
			ingredients,
			steps,
			filename,
			path,
			mimetype,
			originalname,
		});
		console.log(recipe);
		await recipe.save();
		return res.status(201).send("Receta guardada");
		// return res.status(201);
	} catch (error) {
		console.log(error);
	}
};

export const updateRecipe = async (req: Request, res: Response) => {
	const {
		recipe_name,
		description,
		photo,

		servings,
		cooking_time,
		ingredients,
		steps,
	} = req.body;
	// const { user, id } = req.params;
	const newRecipe = {
		recipe_name,
		description,
		photo,

		servings,
		cooking_time,
		ingredients,
		steps,
	};
	await Recipe.findByIdAndUpdate(req.params.id, newRecipe);
	return res.json({ msg: "recipe updated" });
};
export const deleteRecipe = async (req: Request, res: Response) => {
	await Recipe.findByIdAndRemove(req.params.id);
	return res.json({ msg: "recipe deleted" });
};

// TODO mostrar todas las recetas
export const getAllRecipes = async (req: Request, res: Response) => {
	const recipes = await Recipe.find();
	return res.json(recipes);
};
