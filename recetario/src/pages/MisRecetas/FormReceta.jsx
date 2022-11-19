import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import { Form, Formik, Field } from "formik";

import "./form.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function FormReceta() {
	const username = cookies.get("username");
	const fullname = cookies.get("full_name");
	const postImgURL = `http://localhost:4000/your-recipes/${username}`;
	const [fullname_user, setFullname_user] = useState(fullname);
	return (
		<>
			<div>
				<button className="btn btn-ghost text-2xl">
					<Link to="/mis-recetas">Inicio</Link>
				</button>
				{/* <h2 className="text-center text-5xl font-bold mt-10 ">Formulario</h2> */}

				<div className="contenedor">
					<form
						action={`http://localhost:4000/your-recipes/${username}`}
						method="POST"
						encType="multipart/form-data"
						className="formulario"
					>
						<div className="w-full">
							<input
								type="text"
								id="receta"
								name="recipe_name"
								placeholder="Titulo: Chilaquiles Rojos"
								className="input input-lg input-ghost w-full text-3xl"
							/>
						</div>
						<div className="w-full">
							<input
								type="file"
								name="image"
								className="file-input file-input-primary w-full "
							/>
						</div>
						<div className="w-full">
							{/* <label htmlFor="desc">Descripcion de la receta</label> */}
							<textarea
								id="desc"
								name="description"
								placeholder="Descripcion de la receta"
								className="textarea w-full text-md"
							/>
						</div>

						<div>
							<label htmlFor="fullname" className="input-group hidden">
								<span className="label-text">
									Nombre completo de usuario
								</span>
								<input
									type="text"
									id="fullname"
									className="input w-full"
									name="fullname_user"
									value={fullname}
									readOnly
									placeholder="Ricardo Lopez"
								/>
							</label>
						</div>
						<div className="flex flex-col w-full lg:flex-row ">
							<label htmlFor="porciones" className="input-group ">
								<span className="label-text">No. Porciones</span>
								<input
									type="number"
									id="porciones"
									className="input"
									name="servings"
									placeholder="4"
								/>
							</label>
							<label htmlFor="time" className="input-group">
								<span className="label-text">Tiempo de coccion</span>
								<input
									type="number"
									id="time"
									className="input"
									name="cooking_time"
									placeholder="Tiempo en minutos"
								/>
							</label>
						</div>
						<div>
							<label
								htmlFor="ingredientes"
								className="input-group input-group-vertical text-lg pt-8"
							>
								<span className="py-2">Ingredientes</span>
								<textarea
									id="ingredientes"
									type="text"
									name="ingredients"
									placeholder="Ingredientes"
									className="textarea"
								/>
							</label>
						</div>
						<div>
							<label
								htmlFor="pasos"
								className="input-group input-group-vertical text-lg pt-8"
							>
								<span className="py-2">Pasos</span>
								<textarea
									type="text"
									id="pasos"
									name="steps"
									placeholder="Pasos"
									className="textarea"
								/>
							</label>
						</div>

						<button
							type="submit"
							className="btn w-full"
							onClick={() => {
								window.location.href = "./mis-recetas";
							}}
						>
							<Link>Crear Receta</Link>
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default FormReceta;
