import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';
import { useSelector } from 'react-redux';
const Postlist = () => {
  const postlist = useSelector(store => store.PostHandle.posts);
  const fetching = useSelector(store => store.PostHandle.fetchingStatusDone);
  return (
    <>
      {fetching  && <LoadingSpinner/>}
      {fetching && postlist.length === 0 && <WelcomeMessage/>}
      {!fetching && postlist.map((post) =>(
        <Post key={post.id} post = {post} />
      ))}
    </>
  )
}

export default Postlist