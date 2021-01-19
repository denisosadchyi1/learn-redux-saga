import React, {useState} from 'react';
import Post from './Post';
import {connect} from 'react-redux';

const AllPosts = ({myPosts}) => {
  if(!myPosts.length) {
    return (
      <div style={{float: 'left'}}>
        <h5 style={{textAlign:'center'}}>Посто пока нету</h5>
      </div>
    )
  }
  return myPosts.map((post) => <Post post={post.title} key={post.id} />)
}

const mapStateToProps = (state) => ({
  myPosts: state.posts.posts,

})

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, null)(AllPosts);