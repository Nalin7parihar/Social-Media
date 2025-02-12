import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setSearchTerm,setSelectedTag,applyFilters } from '../store/SearchSlice';
import Post from './Post';
const SearchBar = () => {
  const { filteredPosts, searchTerm, selectedTag, posts } = useSelector((store) => store.SearchHandle);
  const dispatch = useDispatch();
  return (
    <div className="p-4 flex gap-4">
      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        className="border p-1 rounded w-67 mb-0.5"
        value={searchTerm}
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
          dispatch(applyFilters());
        }}
      />
         {/* 📌 Filter by Tag */}
         <select
        className="border p-1 rounded w-67 mb-0.5"
        value={selectedTag}
        onChange={(e) => {
          dispatch(setSelectedTag(e.target.value));
          dispatch(applyFilters());
        }}
      >
        <option value="">All Tags</option>
        {Array.from(new Set(posts.flatMap((post) => post.tags))).map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      </div>
  )
}

export default SearchBar