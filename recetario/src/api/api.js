import axios from "axios";

const API_URL = "http://localhost:4000";
export const getRecipesRequest = async (user) => {
	return await axios.get(`/your-recipes/${user}`);
};
