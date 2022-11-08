import React from "react";
import { Link } from "react-router-dom";

function SecondarySection() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<img
					src="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg"
					className="max-w-4xl rounded-lg shadow-2xl"
				/>
				<div>
					<h2 className="mb-5 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
						Bienvenido a tu recetario online
					</h2>
					<p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
						Un lugar en el que puedes subir tus recetas para que las
						demás personas las puedan ver.
					</p>
					<p>
						Inicia sesión si ya tienes una cuenta o puedes registrarte a
						continuación para que puedas crear una receta
					</p>
					<div className="flex items-center mt-6">
						<button className="btn btn-secondary">
							<Link to="/login">Iniciar Sesion</Link>
						</button>
						<button className="btn btn-terciary ml-20">
							<Link to="/signup">Registrarse</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SecondarySection;
