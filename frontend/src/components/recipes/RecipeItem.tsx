import React from "react";
import { Recipe } from "./Recipe";

interface Props {
	recipe: Recipe;
}

const RecipeItem = ({ recipe }: Props) => {
	return (
		<div>
			<h2>{recipe.recipe_name}</h2>
			<h4>{recipe.user}</h4>
		</div>
	);
};

export default RecipeItem;
