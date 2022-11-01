import React from "react";

function SignUp() {
	return (
		<div className="container-form sign-up">
			<div className="welcome-back">
				<div className="message">
					<h1>Bienvenido</h1>
					<img src="../../public/recetario.png" alt="" />
					<p>Si ya tienes una cuenta por favor inicia sesion</p>
					<button className="sign-up-btn">Iniciar sesion</button>
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
