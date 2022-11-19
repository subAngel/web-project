import React from "react";
import Cookies from "universal-cookie";
import { AiOutlineHome } from "react-icons/ai";

import { Link } from "react-router-dom";

import { Component } from "react";
import NavBar from "../../components/NavBar";

const cookies = new Cookies();

class User extends Component {
	cerrarSesion = () => {
		cookies.remove("_id", { path: "/" });
		cookies.remove("username", { path: "/" });
		cookies.remove("full_name", { path: "/" });
		cookies.remove("email", { path: "/" });
		window.location.href = "./login";
	};

	componentDidMount = () => {
		if (!cookies.get("username")) {
			window.location.href = "./login";
		}
	};

	render() {
		const usuario = {
			_id: cookies.get("_id"),
			username: cookies.get("username"),
			full_name: cookies.get("full_name"),
			email: cookies.get("email"),
		};

		return (
			<div>
				<NavBar
					fullname={usuario.full_name}
					darclick={this.cerrarSesion}
				></NavBar>
				{/* //* DASHBOARD */}
				<div className="grid place-items-center bg-white">
					<h1 className="text-4xl font-bold bg-white mt-10 mb-10">
						Mis Recetas
					</h1>
				</div>
			</div>
		);
	}
}

export default User;
