import axios from "axios";

const api = axios.create({
  baseURL: "https://react-application-backend-user.onrender.com",
});

export default api;
