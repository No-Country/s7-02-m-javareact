import axios from "axios";

const urlApi = "https://juntas-production.up.railway.app/users";


export const login = async (user) => {

 
  const response = await axios.post(`${urlApi}/login`, user);


  localStorage.setItem("token", response.data.token);

  return response.data;
};
