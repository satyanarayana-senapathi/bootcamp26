import { PostLibrary } from "../utils/messages/proptypes";
import API from "./API";

const putLibrary = async (url: string, data: PostLibrary) => {
  const res = await API.put(url, data);
  return res.data;
};

export default putLibrary;
