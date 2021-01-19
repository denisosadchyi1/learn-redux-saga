import { CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, REQUEST_POSTS } from "./actionTypes"

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export const showLoader = () => {
  return {
    type : SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type : HIDE_LOADER
  }
}

export const showAlert = (text) => {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000);
  }
}

export const hideAlert = () => {
  return {
    type : HIDE_ALERT
  }
}

export const fetchPost = () => {
  return {
    type: REQUEST_POSTS
  }
  // return async dispatch => {
  //   try{
  //     dispatch(showLoader())
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //     const json = await response.json()
  //     dispatch({ type: FETCH_POST, payload: json })
  //     dispatch(hideLoader())
  //   }
  //   catch(e) {
  //     dispatch(showAlert('Something go wrong'))
  //     dispatch(hideLoader())
  //   }
  // }
}