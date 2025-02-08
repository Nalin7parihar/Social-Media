import { addPost } from "./PostSlice";
export async function createPostAction(data,dispatch) {
  data.tags = data.tags.split(' ');
  const reactions = {likes: Number(data.likes), dislikes: Number(data.dislikes)};
  const postData = {...data,reactions:  reactions};
  dispatch(addPost(postData)); 
}