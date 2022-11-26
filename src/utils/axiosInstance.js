/* eslint-disable import/no-anonymous-default-export */
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

export const authAPI = {
  async trySignUp(email, password) {
    const res = await axiosInstance.post(`auth/signup`, { email, password });
    console.log(email, password, res);
    return res;
  },

  async trySignIn(email, password) {
    const res = await axiosInstance.post(`auth/signin`, { email, password });
    return res;
  },
};

export const todoAPI = {
  async getTodoList() {
    const res = await authAxiosInstance.get(`todos`);
    return res;
  },

  async createTodoItem(todo) {
    const res = await authAxiosInstance.post(`todos`, { todo });
    return res;
  },

  async updateTodoItem(todo, isCompleted, id) {
    const res = await authAxiosInstance.put(`todos/${id}`, {
      todo,
      isCompleted,
    });
    return res;
  },

  async deleteTodoItem(id) {
    const res = await authAxiosInstance.delete(`todos/${id}`);
    return res;
  },
};
