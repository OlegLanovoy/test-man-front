import axios from "axios";
const BASE_API = "http://localhost:5000";

export const likePost = async (postId: number) => {
  return axios.post(`${BASE_API}/likes`, { postId }, { withCredentials: true });
};

export const unlikePost = async (postId: number) => {
  return axios.delete(`${BASE_API}/likes/${postId}`, { withCredentials: true });
};
