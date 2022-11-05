import React, { useEffect, useState } from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { Recipe } from "../components/recipes/Recipe";
import RecipeList from "../components/recipes/RecipeList";
import { getRecipes } from "../components/recipes/recipeService";
import NavBar from "../components/NavBar/NavBar";

function Home() {
	return (
		<div className="container">
			<NavBar />
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
				<RecipeList />
			</div>
		</div>
	);
}

export default Home;
