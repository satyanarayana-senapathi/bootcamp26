import API from "./API";

const getList = async (url: string) => {
  const res = await API.get(url);
  return res.data;
};

export default getList;
