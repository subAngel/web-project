import React from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";

function SignUp() {
	return (
		<div className="container-form sign-up">
			<div className="welcome-back">
				<div className="message">
					<h1>Bienvenido</h1>
					<img
						src="https://cdn-icons-png.flaticon.com/512/683/683488.png"
						alt="Imagen de un recetario"
					/>
					<p>Si ya tienes una cuenta por favor inicia sesion</p>
					<button className="sign-up-btn">
						<BubblyLink to="/login">Iniciar Sesion</BubblyLink>
					</button>
				</div>
			</div>
			<form className="formulario">
				<h1 className="create-account">Crear una cuenta </h1>
				<input type="text" placeholder="Nombre" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Contraseña" />
				<input type="button" value="Registrarse" />
			</form>
		</div>
	);
}

export default SignUp;
