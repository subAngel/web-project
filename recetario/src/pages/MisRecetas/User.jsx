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
		const usuario = {
			_id: cookies.get("_id"),
			username: cookies.get("username"),
			full_name: cookies.get("full_name"),
			email: cookies.get("email"),
		};

		return (
			<div clas>
				<div className="navbar bg-base-100">
					<div className="navbar-start">
						<div className="dropdown">
							<Link to="/">
								<button className="btn btn-ghost">Inicio</button>
							</Link>
						</div>
					</div>
					<div className="navbar-center">
						<a className="btn btn-primary normal-case text-xl">
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
				{/* //* DASHBOARD */}

				<div>
					<h2 className="text-center text-3xl">{usuario.full_name}</h2>
				</div>
				<div>
					<h2 className="text-center btn btn-active btn-accent ">
						Crear nueva receta
					</h2>
				</div>
			</div>
		);
	}
}

export default User;
