import {configureStore} from '@reduxjs/toolkit';
import PostSlice from './PostSlice';
import SearchSlice from './SearchSlice';


const socialStore = configureStore({
  reducer: {
    PostHandle : PostSlice.reducer,
    SearchHandle : SearchSlice.reducer,
  }
})

export default socialStore;