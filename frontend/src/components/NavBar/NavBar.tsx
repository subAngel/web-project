import React from "react";
import { BubblyLink } from "react-bubbly-transitions";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<BubblyLink to="/" className="navbar-brand">
					<h1>Inicio</h1>
				</BubblyLink>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarColor"
					aria-controls="navbarColor02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					// className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<BubblyLink
								className="nav-link"
								aria-current="page"
								to="/login"
							>
								<h4>Iniciar Sesión</h4>
							</BubblyLink>
						</li>
						<li className="nav-item ms-3">
							<BubblyLink
								className="nav-link"
								aria-current="page"
								to="/signup"
							>
								<h4>Registrarse</h4>
							</BubblyLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
