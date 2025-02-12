import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';
import { useSelector } from 'react-redux';
const Postlist = () => {
  const postlist = useSelector(store => store.PostHandle.posts);
  const fetching = useSelector(store => store.PostHandle.fetchingStatusDone);
  const {filteredPosts,searchTerm} = useSelector(store => store.SearchHandle);
  return (
    <>
      <div className="space-y-4">
  {searchTerm.length > 0 ? (
    filteredPosts.length > 0 ? (
      filteredPosts.map((post) => <Post key={post.id} post={post} />)
    ) : (
      <p>No posts found.</p>
    )
  ) : (
    postlist.length > 0 ? (
      postlist.map((post) => <Post key={post.id} post={post} />)
    ) : (
      !fetching && <p>No posts available.</p>
    )
  )}
</div>
    </>
  )
}

export default Postlist