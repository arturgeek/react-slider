import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import rootReducer from './Reducers/rootReducer';

import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const copmposedEnhancers = composeAlt( 
  applyMiddleware(thunk),
);
const store = createStore( rootReducer, copmposedEnhancers );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App secondsInterval={5} />
    </Provider>
  </React.StrictMode>
);