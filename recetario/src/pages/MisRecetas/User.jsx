import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import "./mis-recetas.css";
import "./particles.scss";

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
		<div className="md:bg-base ">
			{/* <div id="particle-container z-10 h-sreen">
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
			</div> */}
			<NavBar fullname={full_name} darclick={cerrarSesion}></NavBar>
			{/* //* DASHBOARD */}
			<div className="grid place-items-center bg-base">
				<h1 className="text-4xl font-bold mt-6 mb-6">Mis Recetas</h1>
			</div>

			<div className="w-9/12 mx-auto ">
				<div className="recipes-container grid md:grid-cols-4 gap-7 bg-base pb-20">
					{recipes.map((recipe) => (
						<RecipeCardUser recipe={recipe} key={recipe._id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default User;
