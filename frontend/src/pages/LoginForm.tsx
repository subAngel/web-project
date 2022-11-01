import React from "react";
import SignUpForm from "./SignUpForm";
// import "./login.css";

import SignUp from "./SignUpForm";
import { Link } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";

const Login = () => {
	return (
		<div className="main">
			<div className="container-formulario log-in row">
				<form className="formulario">
					<h1 className="create-account">Iniciar Sesion</h1>
					<input type="text" placeholder="Nombre de usuario" />
					<input type="password" placeholder="Contraseña" />
					<input type="button" value="Iniciar sesion" />
				</form>
				<div className="welcome-back">
					<div className="message">
						<h1>Bienvenido</h1>
						<img
							className="img-form"
							src="https://cdn-icons-png.flaticon.com/512/683/683488.png"
							alt="Imagen de un recetario"
						/>
						<p>Si aun no tienes cuenta por favor registrese aqui</p>
						<BubblyLink to="/signup" className="log-in-btn ">
							Registrarse
						</BubblyLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
