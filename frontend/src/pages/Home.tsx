import React, { useEffect, useState } from "react";
import { Recipe } from "../recipes/Recipe";
import { getRecipes } from "../recipes/recipeService";

function Home() {
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
			<h1>Recetas</h1>
			<div>
				{recipes.map((recipe) => {
					return (
						<div>
							<h2>{recipe.recipe_name}</h2>
							<h4>{recipe.user}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
