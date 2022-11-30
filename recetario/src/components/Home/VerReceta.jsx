import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import { render } from "react-dom";
import * as pdf from "html-pdf";

var node = document.getElementById("content");
var receta = document.getElementById("receta-body");

const URL_RECIPE = "http://localhost:4000";
function VerReceta() {
	const params = useParams();
	const [recipe, setRecipe] = useState({});
	const [arrIng, setArrIng] = useState([]);
	const [arrPasos, setArrPasos] = useState([]);
	useEffect(() => {
		async function getRecipe() {
			const response = await axios.get(URL_RECIPE + "/recipe/" + params.id);
			console.log("Data", response.data);
			setRecipe(response.data);
			setArrIng(response.data.ingredients);
			setArrPasos(response.data.steps);
		}

		getRecipe();
		// cargarLista();
	}, []);

	const list_ingredientes = arrIng.map((ing, index) => (
		<li key={index} className="list-disc last:hidden">
			{ing.replace(/,/g, "").replace(",", "")}
		</li>
	));
	const list_pasos = arrPasos.map((paso, index) => (
		<li key={index} className="list-decimal last:hidden">
			{paso.replace(/,/g, "").replace(",", "")}
		</li>
	));

	return (
		<div>
			<div className="navbar bg-base-100 sticky top-0 z-[100]">
				<button className="btn btn-ghost normal-case text-xl">
					<Link to="/">Inicio</Link>
				</button>
			</div>
			<div className="container mx-auto h-full p-3 " id="receta">
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row">
						<img
							src={URL_RECIPE + recipe.path}
							className="max-w-sm rounded-lg shadow-2xl"
						/>
						<div id="receta-body">
							<h1 className="text-5xl font-bold">
								{recipe.recipe_name}
							</h1>
							<h3 className="mt-3 text-xl">
								Subido por{" "}
								<span className="italic font-bold">
									{recipe.fullname_user}
								</span>
							</h3>
							<h4 className="mt-3 text-xl font-bold">Descripcion</h4>
							<p className="mt-2">{recipe.description}</p>

							<div className="flex mt-4">
								<div className="grid h-10 w-30 place-items-center">
									<span className="font-bold">Porciones: </span>
									<span>{recipe.servings}</span>
								</div>
								<div className="divider divider-horizontal"></div>
								<div className="grid h-10 place-items-center">
									<span className="font-bold">
										Tiempo de preparación:{" "}
									</span>
									<span>{recipe.cooking_time} min</span>
								</div>
							</div>

							<h4 className="mt-3 text-xl font-bold">Ingredientes</h4>
							<div>
								<ul className="pl-8">{list_ingredientes}</ul>
							</div>
							{/* <p className="mt-2">{recipe.ingredients}</p> */}

							<h4 className="mt-3 text-xl font-bold">
								Pasos de laboración
							</h4>
							{/* <p className="mt-2">{recipe.steps}</p> */}
							<div>
								<ul className="pl-8">{list_pasos}</ul>
							</div>
							<button
								className="btn btn-warning mt-5"
								onClick={() => {
									pdf.create(receta).toFile(
										"Salida.pdf",
										(err) => {
											if (err) {
												console.log(
													"Error creando pdf",
													err
												);
											} else {
												console.log(
													"Pdf creado correctamente"
												);
											}
										}
									);
								}}
							>
								Guardar Receta
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <div id="content">
				<h1>Hello world</h1>
			</div> */}
		</div>
	);
}

export default VerReceta;
