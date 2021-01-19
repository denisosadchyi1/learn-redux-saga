import React, { useState } from "react";
import { connect } from "react-redux";
import {createPost, showAlert} from '../redux/actions';
import { Alert } from "./Alert";

const AddPostForm = (props) => {
  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if(!title.trim()) {
      return props.showAlert('Enter something')
    }

    const newPost = {
      title,
      id: Date.now().toString()
    }

    props.createPost(newPost)
    
    setTitle('')
  };


  return (
    <form onSubmit={(e) => submitHandler(e)}>
      {props.alert ? <Alert text={props.alert} /> : null}
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Заголовок поста</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-success" type="submit">Создать</button>
    </form>
  );
};

const mapDispatchToProps = {
  createPost, showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
