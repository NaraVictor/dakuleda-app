import axios from "axios";
import { baseUrl } from "./urls";

export const getData = async (url) => {
	return await axios.get(`${baseUrl}/${url}`);
};

export const postData = async (url) => {
	return await axios.post(`${baseUrl}/${url}`);
};

export default getData;
