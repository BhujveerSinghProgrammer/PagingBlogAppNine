import React, { useState } from 'react'
import { useEffect } from 'react';
import { loadAllPosts,loadAllPostsByPageNumberandPageSize } from '../services/post-service';
import { Row,Col,Pagination,PaginationItem,PaginationLink, Container } from 'reactstrap';
import Posts from './Posts';
import { toast } from 'react-toastify';


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
    console.log('details');
    console.log(data.LastPage);
    console.log(data.PageNumber);

  }).catch(error=>{
    console.log(error);
    toast.error("Error in Loading All Posts");
  })
},[]
);

const changePage=(PageNumberInput=0,PageSizeInput=5)=>
{
  loadAllPostsByPageNumberandPageSize(PageNumberInput,PageSizeInput).then(data=>{
 setPostContent(data);
   console.log(PageNumberInput);
    console.log(PageSizeInput);

  }).catch(error=>{
    toast.error("Error in Loading Posts Pagewise");
  })
}



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
  <PaginationItem onClick={()=>{changePage(index+1,3)}} active={index==postContent.PageNumber-1}  key={index} >
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
