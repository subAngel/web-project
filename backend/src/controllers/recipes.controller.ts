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
		const { recipe_name, description, fullname_user, servings, cooking_time } =
			req.body;
		const texto_ingrediente = req.body.ingredients;
		const arr_ingredientes = texto_ingrediente.split("\n");
		const texto_pasos = req.body.steps;
		const arr_pasos = texto_pasos.split("\n");
		const { user } = req.params;

		const recipe = new Recipe({
			recipe_name,
			description,
			user,
			fullname_user,
			servings,
			cooking_time,
			ingredients: arr_ingredientes,
			steps: arr_pasos,
			filename,
			path,
			mimetype,
			originalname,
		});
		console.log(recipe);
		await recipe.save();
		return res.status(201).send("Receta guardada");
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
		const { recipe_name, description, servings, cooking_time } = req.body;
		const texto_ingrediente = req.body.ingredients;
		const arr_ingredientes = texto_ingrediente.replace(/,/g, "").split("\n");
		const texto_pasos = req.body.steps;
		const arr_pasos = texto_pasos.replace(/,/g, "").split("\n");

		const { id } = req.params;
		const newRecipe = {
			recipe_name,
			description,
			servings,
			cooking_time,
			ingredients: arr_ingredientes,
			steps: arr_pasos,
			filename,
			path,
			mimetype,
			originalname,
		};
		console.log(newRecipe);
		console.log(typeof id, id);
		// await Recipe.updateOne({ _id:  }, newRecipe);
		// await Recipe.updateOne({"_id" : id }, newRecipe);
		await Recipe.findByIdAndUpdate({ _id: id }, newRecipe);
		return res.status(201).send("Receta actualizada");
	} catch (error) {
		console.log(error);
		return res.status(500).send("Error");
	}
};

export const deleteRecipe = async (req: Request, res: Response) => {
	const recetaDel = await Recipe.findByIdAndRemove(req.params.id);
	if (!recetaDel) return res.status(204).json();
	return res.json({ msg: "recipe deleted", receta: recetaDel });
};

// TODO mostrar todas las recetas
export const getAllRecipes = async (req: Request, res: Response) => {
	const recipes = await Recipe.find();
	return res.json(recipes);
};

export const searchRecipes = async (req: Request, res: Response) => {
	try {
		const { word } = req.params;
		const encontradas = await Recipe.find({ $text: { $search: word } });
		return res.json(encontradas);
	} catch (error) {
		return res.send("No se encontraron recetas con este nombre");
	}
};

export const cargarPDF = async (req: Request, res: Response) => {
	const content = ``;
};
