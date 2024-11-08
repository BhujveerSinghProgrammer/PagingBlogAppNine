import React from 'react'
import { Button, Card, CardBody, CardText } from 'reactstrap'

function Posts({ post = { Title: "This is Default Post Title", Content: "This is Default Content" } }) {
  return (
    <Card className='border-0 shadow-sm mb-3'>
      <CardBody>
        <h4>{post.Title}</h4>
        {/* <CardText>{post.Content}</CardText> */}
  <CardText dangerouslySetInnerHTML={{ __html:post.Content.substring(0,60)+'..'}}>
    {/* {post.Content.substring(0,30)}... */}
    </CardText>
        <div>
          <Button>Read More..</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default Posts;
