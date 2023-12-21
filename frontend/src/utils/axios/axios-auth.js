import axios from "axios";
import Cookie from "js-cookie";

const axiosAuth = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

axiosAuth.interceptors.request.use((config) => {
  const token = Cookie.get("login_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      Cookie.remove("login_token");
    }
    throw error;
  }
);

export default axiosAuth;
