"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRecipes = exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getRecipe = exports.getRecipes = void 0;
const recipes_1 = __importDefault(require("../models/recipes"));
const user_1 = __importDefault(require("../models/user"));
const getFullName = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield user_1.default.findOne({ username: user });
    return usuario === null || usuario === void 0 ? void 0 : usuario.full_name;
});
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req.params;
    const tasks = yield recipes_1.default.find({ user: user });
    return res.status(200).json(tasks);
});
exports.getRecipes = getRecipes;
const getRecipe = (req, res) => {
    return res.json({ msg: "get recipe" });
};
exports.getRecipe = getRecipe;
const createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const path = (_b = req.file) === null || _b === void 0 ? void 0 : _b.path;
        const mimetype = (_c = req.file) === null || _c === void 0 ? void 0 : _c.mimetype;
        const originalname = (_d = req.file) === null || _d === void 0 ? void 0 : _d.originalname;
        const { recipe_name, description, fullname_user, servings, cooking_time, ingredients, steps, } = req.body;
        const { user } = req.params;
        const recipe = new recipes_1.default({
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
        yield recipe.save();
        return res.status(201).json({ status: "Receta guardada" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createRecipe = createRecipe;
const updateRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipe_name, description, photo, servings, cooking_time, ingredients, steps, } = req.body;
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
    yield recipes_1.default.findByIdAndUpdate(req.params.id, newRecipe);
    return res.json({ msg: "recipe updated" });
});
exports.updateRecipe = updateRecipe;
const deleteRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield recipes_1.default.findByIdAndRemove(req.params.id);
    return res.json({ msg: "recipe deleted" });
});
exports.deleteRecipe = deleteRecipe;
// TODO mostrar todas las recetas
const getAllRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipes_1.default.find();
    return res.json(recipes);
});
exports.getAllRecipes = getAllRecipes;
