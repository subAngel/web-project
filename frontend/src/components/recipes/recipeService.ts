import axios from "axios";

export const getRecipes = async () => {
	return await axios.get("http://localhost:4000/all-recipes");
};
