import { addPost } from "./PostSlice";
export async function createPostAction(data,dispatch) {
  data.tags = data.tags.split(' ');
  const reactions = {likes: data.likes, dislikes: data.dislikes};
  const postData = {...data,reactions:  reactions};
  dispatch(addPost(postData)); 
}