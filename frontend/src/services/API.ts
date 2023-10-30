import axios from "axios";
const BASE_URL = "http://localhost:8090"
export const API = axios.create({
  baseURL: BASE_URL
});
console.log(process.env.REACT_APP_API_ENDPOINT);
