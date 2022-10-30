import { Request, Response } from "express";
import Recipe, { IRecipe } from "../models/recipes";

export const getRecipes = async (req: Request, res: Response) => {
	const { user } = req.params;
	const tasks = await Recipe.find({ user: user });
	return res.status(200).json(tasks);
};
export const getRecipe = (req: Request, res: Response) => {
	return res.json({ msg: "get recipe" });
};
export const createRecipe = async (req: Request, res: Response) => {
	const {
		recipe_name,
		description,
		photo,
		origin,
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
		photo,
		origin,
		servings,
		cooking_time,
		ingredients,
		steps,
	});
	await recipe.save();
	return res.status(201).json({ status: "Receta guardada" });
};

export const updateRecipe = async (req: Request, res: Response) => {
	const {
		recipe_name,
		description,
		photo,
		origin,
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
		origin,
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
export const getAllRecipes = (req: Request, res: Response) => {
	return res.json({ msg: "all recipes" });
};
