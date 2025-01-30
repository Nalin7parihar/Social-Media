import {configureStore} from '@reduxjs/toolkit';
import PostSlice from './PostSlice';



const socialStore = configureStore({
  reducer: {
    PostHandle : PostSlice.reducer,

  }
})

export default socialStore;