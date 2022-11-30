import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Document, Page, Image, Text, View } from "@react-18-pdf/renderer";

const URL_RECIPE = "http://localhost:4000";
function VerPDF() {
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
		<Document>
			<Page size="A4">
				<View>
					<View className="navbar bg-base-100 sticky top-0 z-[100]">
						{/* <button className="btn btn-ghost normal-case text-xl">
							<Link to="/">Inicio</Link>
						</button> */}
					</View>
					<View className="container mx-auto h-full p-3 " id="receta">
						<View className="hero min-h-screen bg-base-200">
							<View className="hero-content flex-col lg:flex-row">
								<Image
									src={URL_RECIPE + recipe.path}
									className="max-w-sm rounded-lg shadow-2xl"
								/>
								<View>
									<Text className="text-5xl font-bold">
										{recipe.recipe_name}
									</Text>
									<Text className="mt-3 text-xl">
										Subido por{" "}
										<Text className="italic font-bold">
											{recipe.fullname_user}
										</Text>
									</Text>
									<Text className="mt-3 text-xl font-bold">
										Descripcion
									</Text>
									<Text className="mt-2">
										{recipe.description}
									</Text>

									<View className="flex mt-4">
										<View className="grid h-10 w-30 place-items-center">
											<Text className="font-bold">
												Porciones:{" "}
											</Text>
											<Text>{recipe.servings}</Text>
										</View>
										<View className="Viewider Viewider-horizontal"></View>
										<View className="grid h-10 place-items-center">
											<Text className="font-bold">
												Tiempo de preparación:{" "}
											</Text>
											<Text>{recipe.cooking_time} min</Text>
										</View>
									</View>

									<Text className="mt-3 text-xl font-bold">
										Ingredientes
									</Text>
									<View>
										<ul className="pl-8">{list_ingredientes}</ul>
									</View>
									{/* <p className="mt-2">{recipe.ingredients}</p> */}

									<Text className="mt-3 text-xl font-bold">
										Pasos de laboración
									</Text>
									{/* <p className="mt-2">{recipe.steps}</p> */}
									<View>
										<ul className="pl-8">{list_pasos}</ul>
									</View>
									{/* <button
										className="btn btn-warning mt-5"
										onClick={() => {
											console.log("PDF");
										}}
									>
										Guardar Receta
									</button> */}
								</View>
							</View>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	);
}

export default VerPDF;
