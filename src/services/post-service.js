import { myAxious, privateAxious } from "./helper";

export const createPost=(postData)=>{
  console.log('the posted data' + postData);
  return privateAxious.post('/api/ReactJsApis/PostContentDetails',postData).then((response)=>response.data);
}
 
//get all posts
//All get posts apis are public so use "myaxios" instead of privateAxious

export const loadAllPosts=()=>{
  return myAxious.get('/posts').then(response=>response.data); 
}