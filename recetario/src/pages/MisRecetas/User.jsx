import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import "./mis-recetas.css";

import { getRecipesRequest } from "../../api/api.js";
import NavBar from "../../components/NavBar";

const cookies = new Cookies();

function User() {
	const [_id, set_id] = useState(cookies.get("_id"));
	const [username, setUsername] = useState(cookies.get("username"));
	const [full_name, setFull_name] = useState(cookies.get("full_name"));
	const [email, setEmail] = useState(cookies.get("email"));
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		if (!cookies.get("username")) {
			window.location.href = "./login";
		}
		async function loadRecipes() {
			const response = await getRecipesRequest(cookies.get("username"));
			console.log(response.data);
			setRecipes(response.data);
		}
		loadRecipes();
	}, []);

	const cerrarSesion = () => {
		cookies.remove("_id", { path: "/" });
		cookies.remove("username", { path: "/" });
		cookies.remove("full_name", { path: "/" });
		cookies.remove("email", { path: "/" });
		window.location.href = "./login";
	};

	return (
		<div className="bg-white">
			<NavBar fullname={full_name} darclick={cerrarSesion}></NavBar>
			{/* //* DASHBOARD */}
			<div className="grid place-items-center bg-white">
				<h1 className="text-4xl font-bold mt-10 mb-3">Mis Recetas</h1>
			</div>

			<div className="container mx-auto p-2"></div>
		</div>
	);
}

export default User;
