import axios from "axios";

const urlApi = "https://juntas-production.up.railway.app/users";

export const login = async (user) => {
  const response = await axios.post(`${urlApi}/login`, user);
  console.log(response.data);
  //   return response.data;
};
