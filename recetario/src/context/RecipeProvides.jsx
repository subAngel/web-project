import { useContext, useState } from "react";

import { RecipeContext } from "./RecipeContext";
import { getRecipesRequest } from "../api/api.js";

export const useRecipes = () => {
	const context = useContext(RecipeContext);
	if (!context) {
		throw new Error("UseRecipes must be used within a recipeContextProvider");
	}
	return context;
};

export const RecipesContextProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);

	async function loadRecipes(username) {
		const response = await getRecipesRequest(username);
		console.log(response.data);
		setRecipes(response.data);
	}

	const createRecipe = async (username, formData) => {
		fetch(`http://localhost:4000/your-recipes/${username}`, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.text())
			.then((res) => {
				console.log(res);
				window.location.href = "../mis-recetas";
			})
			.catch((err) => console.error(err));
	};
	const deleteRecipe = async (id) => {
		fetch(`http://localhost:4000/your-recipes/${id}`, { method: "DELETE" })
			.then((res) => res.json())
			.then((res) => {
				setRecipes(recipes.filter((recipe) => recipe._id !== id));
				console.log(res);
			})
			.catch((err) => console.error(err));
	};

	return (
		<RecipeContext.Provider
			value={{ recipes, loadRecipes, createRecipe, deleteRecipe }}
		>
			{children}
		</RecipeContext.Provider>
	);
};
