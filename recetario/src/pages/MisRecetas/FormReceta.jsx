import React from "react";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";

function FormReceta() {
	return (
		<>
			<div>
				<button className="btn btn-ghost text-2xl">
					<Link to="/mis-recetas">Inicio</Link>
				</button>
				{/* <h2 className="text-center text-5xl font-bold mt-10 ">Formulario</h2> */}
				<div className="flex flex-col sm:justify-center items-center mt-10 ">
					<form className="w-full max-w-5xl md:flex md:items-center mb-6 bg-yellow-100 rounded-lg">
						<div className="form-control">
							<div className="md:w-5/6">
								<input
									type="text"
									id="large-input"
									className="p-4 w-full rounded-lg text-3xl m-8"
									placeholder="Nombre de la receta Ej. pollo asado"
								/>
							</div>
							<div className="md:w-1/6">
								<p className="btn btn-secondary">
									<IoMdImages className="text-4xl" />
								</p>
							</div>
						</div>
						<div className="form-control">
							<div className="w-full">
								<textarea
									name=""
									id=""
									placeholder="Descripcion del platillo"
									className="textarea w-full max-w-lg"
								></textarea>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default FormReceta;
