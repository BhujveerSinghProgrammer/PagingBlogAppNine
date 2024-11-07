import React, { useState } from 'react'
import { useEffect } from 'react';
import { loadAllPosts } from '../services/post-service';
import { Row,Col,Pagination,PaginationItem,PaginationLink, Container } from 'reactstrap';
import Posts from './Posts';


function NewFeed() 
{
const[postContent,setPostContent]=useState(
   {
      Contents:[],
      LastPage:'',
      PageNumber:'',
      PageSize:'',
      TotalElements:'',
      TotalPages:''
   }
 );

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


{/* paging implementation */}
<Container className='text-center mt-1'>
  <Pagination>
  
  <PaginationItem disabled={postContent.PageNumber==0}>
    <PaginationLink previous>

    </PaginationLink>
  </PaginationItem>



{
[...Array(postContent.TotalPages)].map((item,index)=>(
  <PaginationItem active={index==postContent.PageNumber}  key={index} >
    <PaginationLink >
    {index+1}
    </PaginationLink>
  </PaginationItem>
  ))
}


<PaginationItem disabled={postContent.LastPage==postContent.PageNumber}>
    <PaginationLink next>

    </PaginationLink>
  </PaginationItem>




</Pagination>
</Container>


  </Col>
</Row>
   </div>

   
  )
}

export default NewFeed
