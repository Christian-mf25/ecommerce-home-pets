import axios from "axios";

const api = axios.create({
  baseURL: "https://home-pets.herokuapp.com/",
});

export default api;
