import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import Cookies from "universal-cookie";

import "./form.css";
import { useRecipes } from "../../context/RecipeProvides";
const cookies = new Cookies();

function CrearReceta() {
	const username = cookies.get("username");
	const fullname = cookies.get("full_name");

	const { createRecipe } = useRecipes();
	// * FORM DATA
	const [recipe_name, setRecipe_name] = useState("");
	const [file, setFile] = useState(null);
	const [descripcion, setDescripcion] = useState("");
	const [porciones, setPorciones] = useState(0);
	const [tiempo, setTiempo] = useState(0);
	const [ingredientes, setIngredientes] = useState("");
	const [pasos, setPasos] = useState("");

	const handleChange = (e) => {
		if (e.target.name === "recipe_name") {
			setRecipe_name(e.target.value);
		}
		if (e.target.name === "image") {
			setFile(e.target.files[0]);
		}
		if (e.target.name === "description") {
			setDescripcion(e.target.value);
		}
		if (e.target.name === "servings") {
			setPorciones(parseInt(e.target.value));
		}
		if (e.target.name === "cooking_time") {
			setTiempo(parseInt(e.target.value));
		}
		if (e.target.name === "ingredients") {
			setIngredientes(e.target.value);
		}
		if (e.target.name === "steps") {
			setPasos(e.target.value);
		}
	};

	const handleSubmit = () => {
		if (
			(recipe_name && descripcion && ingredientes && pasos) === "" ||
			!file ||
			(porciones && tiempo) === 0
		) {
			alert("Completa los campos");
			return;
		}
		const formData = new FormData();
		formData.append("recipe_name", recipe_name);
		formData.append("image", file);
		formData.append("description", descripcion);
		formData.append("fullname_user", fullname);
		formData.append("servings", porciones);
		formData.append("cooking_time", tiempo);
		formData.append("ingredients", ingredientes);
		formData.append("steps", pasos);
		createRecipe(username, formData);
		console.log("creando receta");
		// TODO
	};

	return (
		<>
			<div>
				<button className="btn btn-ghost text-3xl">
					<Link to="/mis-recetas">Inicio</Link>
				</button>
			</div>

			<div className="contenedor">
				<form className="formulario">
					<div className="w-full">
						<input
							onChange={handleChange}
							className="input input-lg input-ghost w-full text-3xl"
							id="receta"
							name="recipe_name"
							type="text"
							placeholder="Titulo: Chilaquiles Rojos"
						/>
					</div>
					<div className="w-full">
						<input
							// handleChange={}
							onChange={handleChange}
							type="file"
							id="image"
							name="image"
							className="file-input file-input-bordered file-input-success w-full "
							// value={file}
						/>
					</div>
					<div className="w-full">
						{/* <label htmlFor="desc">Descripcion de la receta</label> */}
						<textarea
							onChange={handleChange}
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
								defaultValue={fullname}
								placeholder="Ricardo Lopez"
							/>
						</label>
					</div>
					<div className="flex flex-col w-full lg:flex-row ">
						<label htmlFor="porciones" className="input-group ">
							<span className="label-text">No. Porciones</span>
							<input
								onChange={handleChange}
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
								onChange={handleChange}
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
								onChange={handleChange}
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
								onChange={handleChange}
								type="text"
								id="pasos"
								name="steps"
								placeholder="Pasos"
								className="textarea"
							/>
						</label>
					</div>

					<button
						className="btn btn-primary w-full"
						type="button"
						onClick={handleSubmit}
					>
						Crear Receta
					</button>
				</form>
			</div>
		</>
	);
}

export default CrearReceta;
