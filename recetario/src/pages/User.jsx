import React from "react";
import Cookies from "universal-cookie";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Component } from "react";

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
		console.log(cookies.get("_id"));
		console.log(cookies.get("username"));
		console.log(cookies.get("full_name"));
		console.log(cookies.get("email"));
		return (
			<div>
				<div className="navbar bg-base-100">
					<div className="navbar-start">
						<div className="dropdown">
							<Link to="/">
								<button className="btn btn-ghost">Inicio</button>
							</Link>
						</div>
					</div>
					<div className="navbar-center">
						<a className="btn btn-ghost normal-case text-xl">
							Mis recetas
						</a>
					</div>
					<div className="navbar-end">
						<button
							onClick={() => this.cerrarSesion()}
							className="btn btn-ghost"
						>
							Cerrar sesion
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default User;
