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
		<div className="p-20 container mx-auto px-4">
			<div className="container mx-auto  m-5 relative">
				<form className="flex items-center justify-center sticky top-0">
					<label htmlFor="simple-search" className="sr-only">
						Search
					</label>
					<div className="relative ">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="simple-search"
							className=" input  text-sm rounded-lg  block w-full pl-10 p-2.5 max-w-xs "
							placeholder="Search"
							name="search"
						/>
					</div>
					<button
						type="submit"
						className="p-2.5 ml-2 text-sm font-medium text-white rounded-lg border btn btn-primary "
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<span className="sr-only">Busca una receta</span>
					</button>
				</form>
			</div>

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
