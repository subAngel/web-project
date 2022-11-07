import React from "react";

function NavBar({ logout }) {
	const cerrarSesion = () => {
		cookies.remove("_id", { path: "/" });
		cookies.remove("username", { path: "/" });
		cookies.remove("full_name", { path: "/" });
		cookies.remove("email", { path: "/" });
		window.location.href = "./login";
	};

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					></ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost normal-case text-xl">Mis recetas</a>
			</div>
			<div className="navbar-end">
				<button
					onClick={() => cerrarSesion()}
					className="btn btn-active btn-ghost"
				>
					Cerrar sesion
				</button>
			</div>
		</div>
	);
}

export default NavBar;
