import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddlewre from 'redux-saga';
import {spamWordsMiddleware} from './redux/middleWare';

import App from './App';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddlewre();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, spamWordsMiddleware, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
