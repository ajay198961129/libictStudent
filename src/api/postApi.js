import axiosInstance from "./config";

export const getPosts = () => {
  return axiosInstance.get("/posts");
};

export const getPost = (postId) => {
  return axiosInstance.get(`/posts/${postId}`);
};

export const createPost = (postData) => {
  return axiosInstance.post("/posts", postData);
};

export const updatePost = (postId, postData) => {
  return axiosInstance.put(`/posts/${postId}`, postData);
};

export const deletePost = (postId) => {
  return axiosInstance.delete(`/posts/${postId}`);
};
