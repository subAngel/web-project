"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipes_controller_1 = require("../controllers/recipes.controller");
const router = (0, express_1.Router)();
router.get("/your-recipes/:user", recipes_controller_1.getRecipes);
router.get("/all-recipes", recipes_controller_1.getAllRecipes);
router.post("/your-recipes/:user", recipes_controller_1.createRecipe);
router.put("/:user/your-recipes/:id", recipes_controller_1.updateRecipe);
router.delete("/:user/your-recipes/:id", recipes_controller_1.deleteRecipe);
// TODO arreglar este get
router.get("/:user/your-recipes/:id", recipes_controller_1.getRecipe);
router.get("/all-recipes", recipes_controller_1.getAllRecipes);
exports.default = router;
//87298afc-190d-4276-9216-ce62a5931ac5.jpg
