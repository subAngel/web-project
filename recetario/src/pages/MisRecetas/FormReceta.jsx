import React from "react";
import { Link } from "react-router-dom";

function FormReceta() {
	return (
		<>
			<div>
				<button className="btn btn-ghost text-2xl">
					<Link to="/mis-recetas">Inicio</Link>
				</button>
				{/* <h2 className="text-center text-5xl font-bold mt-10 ">Formulario</h2> */}
				<div className="flex flex-col sm:justify-center items-center mt-10">
					<form className="w-full max-w-5xl">
						<input
							type="text"
							id="large-input"
							class="p-4 w-full rounded-lg text-3xl"
							placeholder="Nombre de la receta Ej. pollo asado"
						/>
					</form>
				</div>
			</div>
		</>
	);
}

export default FormReceta;
