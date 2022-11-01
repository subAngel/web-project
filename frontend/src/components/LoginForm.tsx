import React from "react";

function LoginForm() {
	return (
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
						src="../../public/recetario.png"
						alt="Imagen de un recetario"
					/>
					<p>Si aun no tienes cuenta por favor registrese aqui</p>
					<button className="log-in-btn">Registrarse</button>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
