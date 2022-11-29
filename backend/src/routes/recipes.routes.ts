import { Router } from "express";
import * as recipeCtrl from "../controllers/recipes.controller";

const router = Router();

router.get("/your-recipes/:user", recipeCtrl.getRecipes);
router.get("/all-recipes", recipeCtrl.getAllRecipes);
router.post("/your-recipes/:user", recipeCtrl.createRecipe);
router.put("/your-recipes/:id", recipeCtrl.updateRecipe);
router.delete("/your-recipes/:id", recipeCtrl.deleteRecipe);
// TODO arreglar este get
router.get("/recipe/:id", recipeCtrl.getRecipe);
router.get("/search-recipes/:word", recipeCtrl.searchRecipes);
// router.get("/all-recipes", getAllRecipes);

export default router;

//87298afc-190d-4276-9216-ce62a5931ac5.jpg
