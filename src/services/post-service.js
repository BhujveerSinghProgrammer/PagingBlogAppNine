import { privateAxious } from "./helper";

export const createPost=(postData)=>{
  console.log('the posted data' + postData);
  return privateAxious.post('/api/ReactJsApis/PostContentDetails',postData).then((response)=>response.data);
}
 