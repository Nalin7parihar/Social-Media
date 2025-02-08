import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { PostlistContext}  from "../store/postListStore";
import { deletePost } from "../store/PostSlice";
import { useDispatch } from "react-redux";
import Reactions from "./Reactions";
const Post = ({post}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(post.id));
  }
  return (
    <div className="card post-card" style={{minWidth: "30rem"}}>
  <div className="card-body">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete" onClick=  {handleDelete}>
    <TiDelete />
    <span className="visually-hidden">unread messages</span>
  </span>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => ( <span key = {tag}className="badge text-bg-primary hashtag">{tag}</span>))}
    
  </div>
    <Reactions reactions = {post.reactions}/>
</div>
  )
}

export default Post;