import React from 'react'
import { Button, Card, CardBody, CardText } from 'reactstrap'

function Posts({ post = { Title: "This is Default Post Title", Content: "This is Default Content" } }) {
  return (
    <Card className='border-0 shadow-sm mb-3'>
      <CardBody>
        <h1>{post.Title}</h1>

        {/* No need for <p> tag here, CardText already renders a <p> */}
        {/* <CardText>{post.Content}</CardText> */}
{/* if we want to display only 10 charcaters */}
  <CardText>{post.Content.substring(0,30)}...</CardText>
        <div>
          <Button>Read More..</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default Posts;
