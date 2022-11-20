import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllRecipesRequest } from "../../api/api.js";

const API_URL = "http://localhost:4000";
function SecondarySection() {
	const navigate = useNavigate();
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		async function loadRecipes() {
			const response = await getAllRecipesRequest();
			setRecipes(response.data);
		}
		loadRecipes();
	}, []);

	return (
		<div className="p-20 container mx-auto px-4 hero">
			<div className="grid grid-cols-4 gap-8">
				{recipes.map((recipe) => (
					<div
						className="card card-compact w-60 bg-base-100 shadow-xl"
						key={recipe._id}
					>
						<figure>
							<img
								src={API_URL + recipe.path}
								alt={recipe.recipe_name}
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{recipe.recipe_name}</h2>
							<p>{recipe.description}</p>
							<p>
								Subido por:{" "}
								<span className="italic font-bold">
									{recipe.fullname_user}
								</span>
							</p>
							<div className="card-actions justify-end">
								<button
									className="btn btn-primary btn-sm"
									onClick={() => {
										navigate(`/receta/${recipe._id}`);
									}}
								>
									Ver receta
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SecondarySection;
