import { API_URL } from "../../Utils/constants";
import { delete as httpDelete, get, post } from "axios";

export const getPost = async (id) => {
  try {
    const data = await get(`${API_URL}/posts/${id}`);

    return data;
  } catch (error) {}
};

export const deletePost = async (id, push) => {
  try {
    const data = await httpDelete(`${API_URL}/posts/${id}`);

    push("/");

    return data;
  } catch (error) {
    console.log("no se pudo eliminar");
  }
};

export const createPost = async ({ type, title, text, image, date }) => {
  try {
    const data = await post(`${API_URL}/posts`, {
      type,
      title,
      text,
      image,
      date,
    });

    return data;
  } catch (error) {}
};
