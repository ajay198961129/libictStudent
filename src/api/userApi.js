import axiosInstance from "./config";

export const getUser = (userId) => {
  return axiosInstance.get(`/users/${userId}`);
};

export const createUser = (userData) => {
  return axiosInstance.post("/users", userData);
};

export const updateUser = (userId, userData) => {
  return axiosInstance.put(`/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return axiosInstance.delete(`/users/${userId}`);
};
