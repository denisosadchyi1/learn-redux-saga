import React, {useState} from 'react';
import {connect} from 'react-redux';

const Post = ({post}) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h4 className="card-title">{post}</h4>
      </div>
    </div>
  )
}

export default Post;