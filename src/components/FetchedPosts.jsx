import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPost } from '../redux/actions';
import Post from './Post';

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const postsFetched = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)
  const alert = useSelector(state => state.app.alert)

  if(loading) {
    return (
      <div>
        <h5>Loading....</h5>
      </div>
    )
  } 

  if(!postsFetched.length) {
    return <button 
      className="btn btn-primary"
      onClick={() => dispatch(fetchPost())}
      >Загрузить</button>
  }
  return postsFetched.map((post) => <Post post={post.title} key={post.id} />)
}

export default FetchedPosts;