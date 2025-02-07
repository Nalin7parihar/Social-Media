import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addInitialPosts,addingStarted,addingCompleted } from '../store/PostSlice';
const PostComponent = () => {
  const gettingPost = useSelector(store => store.PostHandle);
  const dispatch=  useDispatch();

  if(gettingPost.fetchStatusDone) return;



   useEffect(() => {
          dispatch(addingStarted());
          const controller  = new AbortController();
          fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then(data => {
            dispatch(addInitialPosts(data.posts));
            dispatch(addingCompleted());
          });
      
          return () => {
            controller.abort();
          }
        
        
        },[]);
  return (
    <>
    </>
  )
}

export default PostComponent;