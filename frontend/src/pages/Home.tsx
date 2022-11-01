import React, { useEffect, useState } from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";
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
			<div className="principal inicio">
				<h1>Recetario Online</h1>
				<img
					src="https://cdn-icons-png.flaticon.com/512/683/683488.png"
					alt="Imagen de un recetario"
				/>
				<p>Inicie sesión o cree una cuenta para poder crear una receta</p>
				<span>
					<BubblyLink to="/login">Iniciar sesión</BubblyLink>
					<BubblyLink to="/signup">Registrarse</BubblyLink>
				</span>
			</div>
			<h2>Todas las recetas</h2>
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
