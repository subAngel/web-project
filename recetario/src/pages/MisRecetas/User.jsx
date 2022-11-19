import React, { Component, useState } from "react";
import Cookies from "universal-cookie";

import { getRecipesRequest } from "../../api/api.js";
import NavBar from "../../components/NavBar";

const cookies = new Cookies();

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usuario: {
				_id: cookies.get("_id"),
				username: cookies.get("username"),
				full_name: cookies.get("full_name"),
				email: cookies.get("email"),
			},
			recipes: [],
		};
	}

	componentDidMount = () => {
		if (!cookies.get("username")) {
			window.location.href = "./login";
		}
		async function loadRecipes() {
			const response = await getRecipesRequest(cookies.get("username"));
			console.log(response.data);
			this.setState((state, props) => {
				return { recipes: state.recipes };
			});
		}
		loadRecipes();
	};
	cerrarSesion = () => {
		cookies.remove("_id", { path: "/" });
		cookies.remove("username", { path: "/" });
		cookies.remove("full_name", { path: "/" });
		cookies.remove("email", { path: "/" });
		window.location.href = "./login";
	};

	render() {
		return (
			<div>
				<NavBar
					fullname={this.state.usuario.full_name}
					darclick={this.cerrarSesion}
				></NavBar>
				{/* //* DASHBOARD */}
				<div className="grid place-items-center bg-white">
					<h1 className="text-4xl font-bold mt-10">Mis Recetas</h1>
				</div>
			</div>
		);
	}
}

export default User;
