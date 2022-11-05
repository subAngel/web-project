import React, { useEffect, useState } from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";
import { Recipe } from "./Recipe";
import RecipeItem from "./RecipeItem";
import { getRecipes } from "./recipeService";

function RecipeList() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	const loadRecipes = async () => {
		const res = await getRecipes();
		setRecipes(res.data);
	};

	useEffect(() => {
		loadRecipes();
	}, []);
	return (
		<div>
			{recipes.map((recipe) => {
				return <RecipeItem recipe={recipe} />;
			})}
		</div>
	);
}

export default RecipeList;
