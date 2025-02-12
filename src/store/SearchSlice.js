import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  filteredPosts: [],
  searchTerm: "",
  selectedTag: "",
};

const SearchSlice = createSlice({
  name: "search-posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload; // Initialize filteredPosts with all posts
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredPosts = state.posts.filter((post) =>
        post.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSelectedTag: (state, action) => {
      state.selectedTag = action.payload;
      state.filteredPosts = state.posts.filter((post) =>
        action.payload ? post.tags.includes(action.payload) : true
      );
    },
    applyFilters: (state) => {
      state.filteredPosts = state.posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          (state.selectedTag === "" || post.tags.includes(state.selectedTag))
        );
      });
    },
  },
});

export const { setPosts, setSearchTerm, setSelectedTag, applyFilters } = SearchSlice.actions;
export default SearchSlice;
