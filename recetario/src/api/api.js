import axios from "axios";

const API_URL = "http://localhost:4000/your-recipes/";
const HOST_NAME = "http://localhost:4000/";
export const getRecipesRequest = async (user) => {
	return await axios.get(API_URL + user);
};

export const getAllRecipesRequest = async () => {
	return await axios.get(HOST_NAME + "all-recipes");
};

export const getRecipeByName = async (palabra) => {
	return await axios.get(HOST_NAME + "search-recipes/" + palabra);
};

export const getRecipeRequest = async (id) => {
	return await axios.get(HOST_NAME + "recipe/" + id);
};

export const updateRecipeRequest = async (id, fields) => {
	await axios.put(HOST_NAME + "your-recipes/" + id, fields);
};
