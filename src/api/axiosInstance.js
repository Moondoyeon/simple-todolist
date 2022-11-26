import axios from "axios";
const PROXY = window.location.hostname === "localhost" ? process.env.REACT_APP_SERVER : "/proxy";
const DEFAULT_CONFIG = {
  baseURL: PROXY,
  headers: { "Content-Type": "application/json" },
};

export const axiosInstance = axios.create(DEFAULT_CONFIG);
export const authAxiosInstance = axios.create(DEFAULT_CONFIG);

axiosInstance.interceptors.request.use(
  (config) => config,
  () => ({ message: "런타임 에러가 발생했습니다." })
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error.response
);

authAxiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("access_token")) {
      config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`;
    }
    return config;
  },
  () => ({ message: "런타임 에러가 발생했습니다." })
);

authAxiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error.response
);
