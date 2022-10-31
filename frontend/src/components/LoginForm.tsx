import React from "react";

function LoginForm() {
	return (
		<div className="container-form log-in">
			<form action="" className="formulario">
				<h1 className="create-account">Iniciar Sesión</h1>
				<input type="text" name="username" placeholder="Nombre de usuario" />
				<input type="password" name="password" placeholder="Contraseña" />
				<input type="submit" name="Ingresar" />
			</form>
			<div className="welcome-back">
				<div className="message">
					<h1>Bienvenido</h1>
					<p>
						Si aún no tienes una cuenta por favor registrese <a>aqui</a>
						<button className="log-in-btn">Registrarse</button>
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
