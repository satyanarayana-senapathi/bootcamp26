import axios from "axios";
export default axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});
console.log(process.env.REACT_APP_API_ENDPOINT);
