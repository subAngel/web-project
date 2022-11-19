import axios from "axios";

const API_URL = " http://localhost:4000/your-recipes/";
export const getRecipesRequest = async (user) => {
	return await axios.get(API_URL + user);
};
