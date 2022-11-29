import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import "./mis-recetas.css";

import { getRecipesRequest } from "../../api/api.js";
import NavBar from "../../components/NavBar";
import RecipeCardUser from "../../components/RecipeCardUser";
import { useRecipes } from "../../context/RecipeProvides";

const cookies = new Cookies();

function User() {
	const [_id, set_id] = useState(cookies.get("_id"));
	const [username, setUsername] = useState(cookies.get("username"));
	const [full_name, setFull_name] = useState(cookies.get("full_name"));
	const [email, setEmail] = useState(cookies.get("email"));
	// const [recipes, setRecipes] = useState([]);

	const { recipes, loadRecipes } = useRecipes();
	useEffect(() => {
		if (!cookies.get("username")) {
			window.location.href = "./login";
		}

		loadRecipes(cookies.get("username"));
	}, []);

	const cerrarSesion = () => {
		cookies.remove("_id", { path: "/" });
		cookies.remove("username", { path: "/" });
		cookies.remove("full_name", { path: "/" });
		cookies.remove("email", { path: "/" });
		window.location.href = "./login";
	};

	return (
		<div className="md:bg-white">
			<NavBar fullname={full_name} darclick={cerrarSesion}></NavBar>
			{/* //* DASHBOARD */}
			<div className="grid place-items-center md:bg-white">
				<h1 className="text-4xl font-bold mt-10 mb-3">Mis Recetas</h1>
			</div>

			<div className="md:container md:mx-auto p-2 recipes-container grid md:grid-cols-4 gap-4">
				{recipes.map((recipe) => (
					<RecipeCardUser recipe={recipe} key={recipe._id} />
				))}
			</div>
		</div>
	);
}

export default User;
