import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import rootReducer from './Reducers/rootReducer';

import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const copmposedEnhancers = compose( 
  applyMiddleware(thunk),
);
const store = createStore( rootReducer, copmposedEnhancers );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);