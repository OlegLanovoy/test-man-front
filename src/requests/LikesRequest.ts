
import {instance} from "./UserRequest"

export const likePost = async (postId: number) => {
  return instance.post(`/likes`, { postId }, { withCredentials: true });
};

export const unlikePost = async (postId: number) => {
  return instance.delete(`/likes/${postId}`, { withCredentials: true });
};
 