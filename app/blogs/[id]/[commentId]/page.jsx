import React from 'react'

const CommentDetail = ({ params }) => {
    console.log('blogId', params.id)
    console.log("commentId", params?.commentId);
  return (
    <div>CommentDetail</div>
  )
}

export default CommentDetail