import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

import axios from "axios";
import Cookies from "universal-cookie";

import "./form.css";
import { useRecipes } from "../../context/RecipeProvides";
const cookies = new Cookies();
const API_URL = "http://localhost:4000";

function CrearReceta() {
	const username = cookies.get("username");
	const fullname = cookies.get("full_name");

	const { getRecipe, updateRecipe } = useRecipes();
	const params = useParams();
	const navigate = useNavigate();
	// * FORM DATA

	const [recipe_name, setRecipe_name] = useState("");
	const [file, setFile] = useState(null);
	const [descripcion, setDescripcion] = useState("");
	const [porciones, setPorciones] = useState(0);
	const [tiempo, setTiempo] = useState(0);
	const [ingredientes, setIngredientes] = useState("");
	const [pasos, setPasos] = useState("");
	const [ing_cantidad, setIng_cantidad] = useState(0);
	const [ing_description, setIng_description] = useState("");
	const [input_pasos, setInput_pasos] = useState("");

	useEffect(() => {
		if (!cookies.get("username")) {
			window.location.href = "../../login";
		} else {
			const loadRecipe = async () => {
				const receta_api = await getRecipe(params.id);
				// console.log(receta_api.recipe_name);
				setRecipe_name(receta_api.recipe_name);
				setDescripcion(receta_api.description);
				setFile(API_URL + receta_api.path);
				setPorciones(receta_api.servings);
				setTiempo(receta_api.cooking_time);
				setIngredientes(receta_api.ingredients);
				setPasos(receta_api.steps);
			};
			loadRecipe();
		}
	}, []);

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
		if (e.target.name === "ing_cantidad") {
			setIng_cantidad(e.target.value);
		}
		if (e.target.name === "ing_descripcion") {
			setIng_description(e.target.value);
		}
		if (e.target.name === "paso_descripcion") {
			setInput_pasos(e.target.value);
		}
	};

	const handleIngrediente = (e) => {
		e.preventDefault();
		let aux = ing_cantidad + "  |  " + ing_description + "\n";
		setIngredientes(ingredientes + aux);
	};

	const handlePaso = (e) => {
		e.preventDefault();
		let aux2 = input_pasos + "\n";
		console.log(input_pasos);
		setPasos(pasos + aux2);
	};

	const handleSubmit = async () => {
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
		await updateRecipe(params.id, formData);
		navigate("/mis-recetas");
		// console.log("Update");
	};

	return (
		<>
			<div className="navbar">
				<div className="navbar-start">
					<button className="btn btn-ghost text-3xl ">
						<Link to="/mis-recetas">Mis Recetas</Link>
					</button>
				</div>
				<div className="navbar-center text-2xl font-bold">Editar Receta</div>
			</div>

			<div className="contenedor">
				<form className="formulario">
					<div className="w-full">
						<input
							onChange={handleChange}
							className="input input-lg input-ghost w-full text-3xl"
							id="receta"
							value={recipe_name}
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
							src={file}
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
							value={descripcion}
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
								value={porciones}
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
								value={tiempo}
								id="time"
								className="input"
								name="cooking_time"
								placeholder="Tiempo en minutos"
							/>
						</label>
					</div>
					<div className="w-full flex">
						<div className="w-auto md:w-full flex justify-around">
							<div className="my-auto mr-2">
								<input
									onChange={handleChange}
									type="number"
									name="ing_cantidad"
									placeholder="8"
									className="input w-28"
								/>
							</div>
							<div className="my-auto mr-2">
								<input
									onChange={handleChange}
									type="text"
									name="ing_descripcion"
									placeholder="Tazas de agua"
									className="input w-56"
								/>
							</div>
							<button
								className="btn btn-square my-auto"
								onClick={handleIngrediente}
							>
								<AiOutlinePlus />
							</button>
						</div>
						<label
							htmlFor="ingredientes"
							className="input-group input-group-vertical text-lg  w-full"
						>
							<span className="py-2">Ingredientes</span>
							<textarea
								onChange={handleChange}
								value={ingredientes}
								id="ingredientes"
								type="text"
								name="ingredients"
								placeholder="Ingredientes"
								className="textarea h-40"
							/>
						</label>
					</div>
					<div className="w-full flex">
						<div className="w-auto md:w-full flex justify-around">
							<div className="w-3/4 my-auto mr-2 justify-items-center">
								<input
									onChange={handleChange}
									type="text"
									name="paso_descripcion"
									className="input w-full"
									placeholder="Agregar en un tazón la harina..."
								/>
							</div>

							<div className="w-1/4 my-auto">
								<button
									className="btn btn-square "
									onClick={handlePaso}
								>
									<AiOutlinePlus />
								</button>
							</div>
						</div>
						<label
							htmlFor="pasos"
							className="input-group input-group-vertical text-lg "
						>
							<span className="py-2">Pasos</span>
							<textarea
								onChange={handleChange}
								value={pasos}
								type="text"
								id="pasos"
								name="steps"
								placeholder="Pasos"
								className="textarea h-40"
							/>
						</label>
					</div>

					<button
						className="btn btn-primary w-full"
						type="button"
						onClick={handleSubmit}
					>
						ar Receta
					</button>
				</form>
			</div>
		</>
	);
}

export default CrearReceta;
