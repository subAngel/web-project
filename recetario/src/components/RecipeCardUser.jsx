import React from "react";
import { useRecipes } from "../context/RecipeProvides";

const API_URL = "http://localhost:4000";

function RecipeCardUser({ recipe }) {
	const { deleteRecipe } = useRecipes();
	return (
		<div className="card card-compact w-54 bg-base-100 shadow-xl m-8">
			<figure>
				{" "}
				<img
					className="w-54"
					src={API_URL + recipe.path}
					alt={recipe.recipe_name}
				/>
			</figure>
			<h2 className="card-title pl-4 mt-1">{recipe.recipe_name}</h2>
			<p className="mb-4 p-4">{recipe.description}</p>
			<div className="card-actions justify-end justify-center mb-4">
				<button
					className="btn btn-ghost bg-error border-none base-content "
					onClick={() => {
						deleteRecipe(recipe._id);
					}}
				>
					Borrar
				</button>
				{/* TODO}
				{/* <button className="btn btn-primary">Actualizar</button> */}
			</div>
		</div>
	);
}

export default RecipeCardUser;
