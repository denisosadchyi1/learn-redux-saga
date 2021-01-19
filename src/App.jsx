import React from 'react';
import AddPostForm from './components/AddPostForm';
import AllPosts from './components/AllPosts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <AddPostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="pb-3 pt-3">Синхроные Посты</h2>
          <AllPosts />
        </div>
        <div className="col">
          <h2 className="pb-3 pt-3">Асинхроные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
