import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
			await setRecipe(response.data);
		}
		getRecipe();
		console.log("Receta", recipe);
		const { ingredients, steps } = recipe;
		console.log(ingredients, steps);
		setArrIng(ingredients);
		setArrPasos(steps);
		// setArrIng(ingredients);
		// setArrPasos(steps);
	}, []);

	// const list_ingredientes = <li>hola</li>;
	// const list_pasos = <li>hola</li>;
	const list_ingredientes = arrIng.map((ing, index) => <li key={index}>{ing}</li>);
	const list_pasos = arrPasos.map((paso, index) => <li key={index}>{paso}</li>);

	return (
		<div>
			<div className="navbar bg-base-100 sticky top-0 z-[100]">
				<button className="btn btn-ghost normal-case text-xl">
					<Link to="/">Inicio</Link>
				</button>
			</div>
			<div className="container mx-auto h-full p-3 ">
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row">
						<img
							src={URL_RECIPE + recipe.path}
							className="max-w-sm rounded-lg shadow-2xl"
						/>
						<div>
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
							<button className="btn btn-warning mt-5">
								Guardar Receta
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VerReceta;
