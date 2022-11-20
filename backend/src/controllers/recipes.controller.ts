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
export const getRecipe = async (req: Request, res: Response) => {
	const id = req.params.id;
	const recipe = await Recipe.findOne({ _id: id });
	console.log(recipe);
	return res.json(recipe);
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
	try {
		const filename = req.file?.filename;
		const path = "/img/uploads/" + req.file?.filename;
		const mimetype = req.file?.mimetype;
		const originalname = req.file?.originalname;
		const {
			recipe_name,
			description,
			servings,
			cooking_time,
			ingredients,
			steps,
		} = req.body;
		const { id } = req.params;
		const newRecipe = new Recipe({
			recipe_name,
			description,
			servings,
			cooking_time,
			ingredients,
			steps,
			filename,
			path,
			mimetype,
			originalname,
		});
		console.log(newRecipe);
		console.log(typeof id);
		// await Recipe.updateOne({ _id:  }, newRecipe);
		await Recipe.updateOne({ _id: id }, newRecipe);
		return res.status(201).send("Receta actualizada");
	} catch (error) {
		console.log(error);
		return res.status(500).send("Error");
	}
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
