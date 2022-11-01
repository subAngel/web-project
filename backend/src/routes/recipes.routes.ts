import { Router } from "express";
import {
	createRecipe,
	deleteRecipe,
	getRecipe,
	getRecipes,
	updateRecipe,
	getAllRecipes,
} from "../controllers/recipes.controller";

const router = Router();

router.get("/:user/your-recipes", getRecipes);
router.get("/all-recipes", getAllRecipes);
router.post("/:user/your-recipes", createRecipe);
router.put("/:user/your-recipes/:id", updateRecipe);
router.delete("/:user/your-recipes/:id", deleteRecipe);
router.get("/:user/your-recipes/:id", getRecipe);
router.get("/all-recipes", getAllRecipes);

export default router;
