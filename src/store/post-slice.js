import {
  getDatabase,
  push,
  ref,
  set,
  child,
  update,
  doc,
  remove,
} from 'firebase/database';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialPosts = {
  posts: [
    { id: 1, message: 'Hello im from USA' },
    { id: 2, message: 'hi everyone!' },
    { id: 3, message: 'Hello im new here!' },
  ],
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialPosts,
  reducers: {
    showPosts: (state) => {
      return state;
    },
    addPost: (state, action) => {
      // TODO: With backend
      const db = getDatabase();
      const postRef = ref(db, 'posts/');
      push(postRef, {
        post: action.payload.message,
      });
      // TODO: Without backend
      // state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      // TODO: With backend
      const id = action.payload;
      console.log(id);
      const db = getDatabase();
      remove(ref(db, 'posts/' + id));
      // TODO: Without backend
      // state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      // TODO: With backend
      const { id } = action.payload;
      const db = getDatabase();
      update(ref(db, 'posts/' + id), {
        post: action.payload.message,
      });
      // TODO: Without backend
      // let isPostExist = state.posts.filter((post) => post.id === id);
      // if (isPostExist) {
      //   isPostExist[0].message = message;
      // }
    },
  },
});
const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});
export const postActions = postSlice.actions;
export default store;
