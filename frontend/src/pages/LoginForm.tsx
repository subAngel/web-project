import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "./SignUpForm";
// import "./login.css";

import SignUp from "./SignUpForm";
import { Link } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";

const Login = () => {
	return (
		<>
			<div className="container-form log-in">
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
							src="https://cdn-icons-png.flaticon.com/512/683/683488.png"
							alt="Imagen de un recetario"
						/>
						<p>Si aun no tienes cuenta por favor registrese aqui</p>
						<button className="log-in-btn">
							<BubblyLink to="/signup">Registrarse</BubblyLink>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
