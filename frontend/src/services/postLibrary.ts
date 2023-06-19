import { PostLibrary } from "../utils/messages/proptypes";
import API from "./API";

const postLibrary = async (url: string, data: PostLibrary) => {
  const res = await API.post(url, data);
  return res.data;
};

export default postLibrary;
