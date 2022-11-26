import { axiosInstance, authAxiosInstance } from "./axiosInstance";

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
