import React, { useState } from 'react'
import { useEffect } from 'react';
import { loadAllPosts } from '../services/post-service';
import { Row,Col } from 'reactstrap';
import Posts from './Posts';


function NewFeed() 
{
const[postContent,setPostContent]=useState(null);

  useEffect(()=>{
  //load all the posts from
  loadAllPosts().then((data)=>{
    console.log(data);
    setPostContent(data);
  }).catch(error=>{
    console.log(error);
  })
},[]
);

  return (

   <div className="container-fluid">
<Row>
  <Col md={{
    size:10,
    offset:1
  }} >
    {/* {JSON.stringify(postContent)} */}
    <h1>Blogs Count ({postContent?.TotalElements})</h1>
  
   
  {
    postContent?.Contents?.map((post)=>(
      <Posts post={post} key={post.Id} />
    ))
  }


  </Col>
</Row>
   </div>

   
  )
}

export default NewFeed
