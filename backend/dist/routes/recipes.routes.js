"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipeCtrl = __importStar(require("../controllers/recipes.controller"));
const router = (0, express_1.Router)();
router.get("/your-recipes/:user", recipeCtrl.getRecipes);
router.get("/all-recipes", recipeCtrl.getAllRecipes);
router.post("/your-recipes/:user", recipeCtrl.createRecipe);
router.put("/your-recipes/:id", recipeCtrl.updateRecipe);
router.delete("/your-recipes/:id", recipeCtrl.deleteRecipe);
// TODO arreglar este get
router.get("/recipe/:id", recipeCtrl.getRecipe);
router.get("/search-recipes/:word", recipeCtrl.searchRecipes);
// router.get("/all-recipes", getAllRecipes);
exports.default = router;
//87298afc-190d-4276-9216-ce62a5931ac5.jpg
