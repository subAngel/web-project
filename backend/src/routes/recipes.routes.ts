import { Router } from "express";
import {
	createRecipe,
	deleteRecipe,
	getRecipe,
	getRecipes,
	updateRecipe,
	getAllRecipes,
	searchRecipes,
} from "../controllers/recipes.controller";

const router = Router();

router.get("/your-recipes/:user", getRecipes);
router.get("/all-recipes", getAllRecipes);
router.get("/all-recipes/search", searchRecipes);
router.post("/your-recipes/:user", createRecipe);
router.put("/your-recipes/:id", updateRecipe);
router.delete("/your-recipes/:id", deleteRecipe);
// TODO arreglar este get
router.get("/recipe/:id", getRecipe);
// router.get("/all-recipes", getAllRecipes);

export default router;

//87298afc-190d-4276-9216-ce62a5931ac5.jpg
