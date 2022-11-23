import * as FileSystem from "expo-file-system";
import { LOAD_POSTS, BOOKED_POST, DELETE_POST, ADD_POST } from "../types";
import { DB } from "../../db";

export const loadPosts = () => {
  return async dispatch => {
    const posts = await DB.getPosts();
    dispatch({
      type: LOAD_POSTS,
      payload: posts
    });
  };
};

export const bookedPost = post => async dispatch => {
  await DB.bookedPost(post);

  dispatch({
    type: BOOKED_POST,
    payload: post.id
  });
};

export const deletePost = id => async dispatch => {
  await DB.deletePost(id);

  dispatch({
    type: DELETE_POST,
    payload: id
  });
};

export const addPost = post => async dispatch => {
  const path = post.img.split("/").pop();
  const newPath = FileSystem.documentDirectory + path;

  try {
    FileSystem.moveAsync({
      from: post.img,
      to: newPath
    });
  } catch (e) {
    console.log(e);
  }

  const payload = { ...post, img: newPath };
  const id = await DB.createPost(payload);

  payload.id = id;

  dispatch({
    type: ADD_POST,
    payload
  });
};
