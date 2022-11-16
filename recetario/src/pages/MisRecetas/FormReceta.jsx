import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import { Form, Formik, Field } from "formik";

import "./form.css";

const postImgURL = "http://localhost:4000/uploads";

function FormReceta() {
	return (
		<>
			<div>
				<button className="btn btn-ghost text-2xl">
					<Link to="/mis-recetas">Inicio</Link>
				</button>
				{/* <h2 className="text-center text-5xl font-bold mt-10 ">Formulario</h2> */}

				<div className="contenedor">
					<form
						action="http://localhost:4000//your-recipes/angel"
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
						<div>
							<label htmlFor="desc">Descripcion de la receta</label>
							<input
								id="desc"
								name="description"
								as="textarea"
								placeholder="descripcion de la receta"
							/>
						</div>
						<div>
							<label htmlFor="file">sube una imagen</label>
							<input
								type="file"
								id="file"
								name="image"
								placeholder="Chilaquiles Rojos"
							/>
						</div>
						<div>
							<label htmlFor="fullname">
								Nombre completo de usuario
							</label>
							<input
								type="text"
								id="fullname"
								name="fullname_user"
								placeholder="Ricardo Lopez"
							/>
						</div>
						<div>
							<label htmlFor="comensales">Numero de comensales</label>
							<input
								type="number"
								id="comensales"
								name="servings"
								placeholder="3"
							/>
						</div>
						<div>
							<label htmlFor="time">Tiempo de cocción</label>
							<input
								type="number"
								id="time"
								name="cooking_time"
								placeholder="120"
							/>
							<label> Minutos</label>
						</div>
						<div>
							<label htmlFor="ingredientes">Ingredientes</label>
							<input
								type="text"
								id="ingredientes"
								name="ingredients"
								placeholder="Ingredientes"
							/>
						</div>
						<div>
							<label htmlFor="pasos">Pasos</label>
							<input
								type="text"
								id="pasos"
								name="steps"
								placeholder="Pasos"
							/>
						</div>

						<button type="submit">Crear Receta</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default FormReceta;
