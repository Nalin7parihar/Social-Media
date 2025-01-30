import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPostAction } from "../store/addPostActions";
const CreatePost = () => {

  const dispatch = useDispatch();// Access loading state from Redux store
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Get form data
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    // Call the createPostAction function and pass dispatch
    await createPostAction(formDataObj, dispatch);
    navigate('/');
  };

  //const {addPost} = useContext(PostlistContext);
  return (
    <Form onSubmit = {handleSubmit}method="POST" className="create-post">
  <div className="mb-3">
    <label htmlFor="title" className="form-label"><b>Title</b></label>
    <input type="text" name = "title" className="form-control" id="exampleInputEmail1" placeholder="Enter appropiate Title" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label"><b>Content</b></label>
    <textarea row = '4'name="body" type="text" className="form-control" id="body" placeholder="How u Feelin'"/>
  </div>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label"><b>userId</b></label>
    <input type="text" name="userId" className="form-control" id="userId"/>
  </div>
  <div className="mb-3">
    <label htmlFor="likes" className="form-label"><b>Number Of Likes</b></label>
    <input type="text" name="likes" className="form-control" id="likes"/>
  </div>
  <div className="mb-3">
    <label htmlFor="dislikes" className="form-label"><b>Number Of Dislikes</b></label>
    <input type="text" name="dislikes" className="form-control" id="dislikes"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label"><b>Enter Tags using space </b></label>
    <input type="text" name="tags" className="form-control" id="tags"/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</Form>
  )
}
export default CreatePost