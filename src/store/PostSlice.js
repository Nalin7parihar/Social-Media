import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const addPost = createAsyncThunk("Posthandle/addPost",async (data) => {
    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title : data.title,
        userId : data.userId,
        reactions : data.reactions,
        tags : data.tags
      })
    });
    if (!response.ok) {
      throw new Error("Failed to add post");
    }
  
    return response.json();
})
const PostSlice = createSlice({
    name : 'PostHandle',
    initialState : {
      posts : [],
      fetchingStatusDone : false,
      error : null
    },
    reducers : {
      addInitialPosts : (state,action) =>{
        state.posts = action.payload;
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
    },
    extraReducers : (builder) => {
      builder
        .addCase(addPost.pending,(state) => {
          state.fetchingStatusDone = true;
        })
        .addCase(addPost.fulfilled, (state, action) => {
          state.fetchingStatusDone = false;
          state.posts.unshift(action.payload); // Add new post at the top
        })
        .addCase(addPost.rejected, (state, action) => {
          state.error = action.error.message;
        });
    }
});

export const {addInitialPosts,addingStarted,addingCompleted,deletePost} = PostSlice.actions;
export default PostSlice;