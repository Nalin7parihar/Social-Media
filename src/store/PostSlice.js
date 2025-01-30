import { createSlice } from "@reduxjs/toolkit";


const PostSlice = createSlice({
    name : 'PostHandle',
    initialState : {
      posts : [],
      fetchingStatusDone : false
    },
    reducers : {
      addInitialPosts : (state,action) =>{
        state.posts = action.payload;
      },
      addPost: (state, action) => {
        state.posts.unshift(action.payload); // ✅ Add a new post
      },
      deletePost: (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload); // ✅ Delete post by ID
      },
      addingStarted : (state) => {
        state.fetchingStatusDone =true;
      },
      addingCompleted : (state) => {
        state.fetchingStatusDone = false;
      }
    }
});

export const {addInitialPosts,addingStarted,addingCompleted,addPost} = PostSlice.actions;
export default PostSlice;